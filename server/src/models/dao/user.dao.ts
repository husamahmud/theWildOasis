import prisma from '../prisma/prisma-client'

import { UserDto } from '../dto/user.dto'

/**
 * Data Access Object (DAO) for interacting with the Users table in the database
 **/
export class UserDao {
  /**
   * Create a new user
   * @param userDto - User data
   * @returns The user created
   **/
  static async createUser(userDto: UserDto): Promise<UserDto> {
    try {
      return prisma.user.create({ data: userDto })
    } catch (error: any) {
      console.error('Error in userDto -> createUser', error)
      throw new Error(error)
    }
  }

  /**
   * Get a user by email
   * @param email - User email
   * @returns The user found or null if the user is not found
   **/
  static async getUserByEmail(email: string): Promise<UserDto | null> {
    try {
      return prisma.user.findUnique({ where: { email } })
    } catch (error: any) {
      console.error('Error in userDto -> getUserByEmail', error)
      throw new Error(error)
    }
  }

  /**
   * Get a user by username
   * @param username - User username
   * @returns The user found or null if the user is not found
   **/
  static async getUserByUsername(username: string): Promise<UserDto | null> {
    try {
      return prisma.user.findUnique({ where: { username } })
    } catch (error: any) {
      console.error('Error in userDto -> getUserByUsername', error)
      throw new Error(error)
    }
  }

  /**
   * Get a user by id
   * @param id - User id
   * @returns The user found or null if the user is not found
   **/
  static async getUserById(id: string): Promise<UserDto | null> {
    try {
      return prisma.user.findUnique({ where: { id } })
    } catch (error: any) {
      console.error('Error in userDto -> getUserById', error)
      throw new Error(error)
    }
  }

  /**
   * Get all users
   * @returns All users
   **/
  static async getAllUsers(): Promise<UserDto[]> {
    try {
      return prisma.user.findMany()
    } catch (error: any) {
      console.error('Error in userDto -> getAllUsers', error)
      throw new Error(error)
    }
  }

  /**
   * Update a user
   * @param id - User id
   * @param userDto - User data
   * @returns The user updated
   **/
  static async updateUser(id: string, userDto: UserDto): Promise<UserDto> {
    try {
      return prisma.user.update({ where: { id }, data: userDto })
    } catch (error: any) {
      console.error('Error in userDto -> updateUser', error)
      throw new Error(error)
    }
  }

  /**
   * Delete a user
   * @param id - User id
   * @returns The user deleted
   **/
  static async deleteUser(id: string): Promise<UserDto> {
    try {
      return prisma.user.delete({ where: { id } })
    } catch (error: any) {
      console.error('Error in userDto -> deleteUser', error)
      throw new Error(error)
    }
  }
}
