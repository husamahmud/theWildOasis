import { Request, Response } from 'express'

import { sendResponse } from '../utils/sendRequest'
import { hash } from '../utils/password'
import { comparePasswords } from '../utils/password'
import { generateToken } from '../utils/token'

import { AuthValidations } from '../middlewares/auth.validations'
import { CreateUserDto, LoginDto } from '../models/dto/user.dto'
import { UserValidations } from '../middlewares/user.validations'
import { UserDao } from '../models/dao/user.dao'

/**
 * Controller class for auth-related operations
 **/
export class AuthController {
  /**
   * Handles the registration of a new user
   **/
  static async register(req: Request, res: Response) {
    const userDto = new CreateUserDto(req.body)

    // Validate the user data
    const { error } = await UserValidations.createUser(userDto)
    if (error) {
      console.error('Error: create user', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the user already exists
      const userEmailExists = await UserDao.getUserByEmail(userDto.email)
      const uesrUsernameExists = await UserDao.getUserByUsername(userDto.username)
      if (userEmailExists || uesrUsernameExists) {
        console.error('Error: user already exists')
        return sendResponse(res, 400, null, 'User already exists')
      }

      // Hash the user password
      const hashedPassword = await hash(userDto.password)

      // Create the user
      const newUser = await UserDao.createUser({
        ...userDto,
        password: hashedPassword,
      })
      if (!newUser) {
        console.error('Error: user not created')
        return sendResponse(res, 500, null, 'User not created')
      }

      console.log('User registered successfully')
      return sendResponse(res, 201, newUser, 'User registered successfully')
    } catch (error: any) {
      console.error('Error in AuthController -> register', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the login of a user
   **/
  static async login(req: Request, res: Response) {
    const loginDto = new LoginDto(req.body)
    if (!loginDto.email || !loginDto.password) {
      return sendResponse(res, 400, null, 'Email and password are required')
    }

    const { error } = await AuthValidations.login(loginDto)
    if (error) {
      return sendResponse(res, 400, null, error)
    }

    try {
      const user = await UserDao.getUserByEmail(loginDto.email)
      if (!user || !(await comparePasswords(loginDto.password, user.password))) {
        return sendResponse(res, 400, null, 'Invalid email or password')
      }

      const tokenExpiration = loginDto.isRememberMe
        ? 7 * 24 * 60 * 60 * 100 // 7 days
        : 15 * 60 * 100 // 15 minutes
      const token = generateToken(user, tokenExpiration)

      res.cookie('authToken', token, {
        httpOnly: true,
        maxAge: tokenExpiration,
      })

      console.log('User logged in successfully')
      return sendResponse(
        res,
        200,
        { user, token },
        'User logged in successfully',
      )
    } catch (error: any) {
      console.error('Error in AuthController -> login', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the logging out of a user
   **/
  static async logout(req: Request, res: Response) {
    try {
      res.clearCookie('authToken')

      console.log('User logged out successfully')
      return sendResponse(res, 200, null, 'User logged out successfully')
    } catch (error: any) {
      console.error('Error in AuthController -> logout', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the updating of an existing user
   **/
  static async updateUser(req: Request, res: Response) {
    const userDto = new CreateUserDto(req.body)
    const id = req.params.id

    // Validate the user data
    const { error } = await UserValidations.updateUser(userDto)
    if (error) {
      console.error('Error: update user', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the user exists
      const existingUser = await UserDao.getUserById(id)
      if (!existingUser) {
        console.error('Error: user not found')
        return sendResponse(res, 404, null, 'User not found')
      }

      if (userDto.email) {
        // Check if the user's email already exists
        const userEmailExists = await UserDao.getUserByEmail(userDto.email)
        if (userEmailExists) {
          console.error('Error: email already exists')
          return sendResponse(res, 400, null, 'Email already exists')
        }
      }

      if (userDto.username) {
        // Check if the user's username already exists
        const userUsernameExists = await UserDao.getUserByUsername(userDto.username)
        if (userUsernameExists) {
          console.error('Error: username already exists')
          return sendResponse(res, 400, null, 'Username already exists')
        }
      }

      if (userDto.password) {
        // Check if the password is the same as the previous one
        const isPasswordSame = await comparePasswords(userDto.password, existingUser.password)
        if (isPasswordSame) {
          console.error('Error: password is the same as the previous one')
          return sendResponse(res, 400, null, 'Password is the same as the previous one')
        }

        // Hash the user password
        userDto.password = await hash(userDto.password)
      }

      // Update the user
      const updatedUser = await UserDao.updateUser(id, userDto)
      console.log('User updated successfully')
      return sendResponse(res, 200, updatedUser, 'User updated successfully')
    } catch (error: any) {
      console.error('Error: update user', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Retrieves all users from the database
   **/
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserDao.getAllUsers()
      return sendResponse(res, 200, users, 'Users retrieved successfully')
    } catch (error: any) {
      console.error('Error: get all users', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Retrieves a specific user by their id
   **/
  static async getUserById(req: Request, res: Response) {
    const id = req.params.id

    try {
      const user = await UserDao.getUserById(id)
      if (!user) {
        console.error('Error: user not found')
        return sendResponse(res, 404, null, 'User not found')
      }

      return sendResponse(res, 200, user, 'User retrieved successfully')
    } catch (error: any) {
      console.error('Error: get user', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the deletion of a user
   **/
  static async deleteUser(req: Request, res: Response) {
    const id = req.params.id

    try {
      // Check if the user exists
      const existingUser = await UserDao.getUserById(id)
      if (!existingUser) {
        console.error('Error: user not found')
        return sendResponse(res, 404, null, 'User not found')
      }

      // Delete the user
      const deletedUser = await UserDao.deleteUser(id)
      console.log('User deleted successfully')
      return sendResponse(res, 200, deletedUser, 'User deleted successfully')
    } catch (error: any) {
      console.error('Error: delete user', error)
      return sendResponse(res, 500, null, error)
    }
  }
}
