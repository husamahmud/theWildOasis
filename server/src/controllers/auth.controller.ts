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
        { token },
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
}
