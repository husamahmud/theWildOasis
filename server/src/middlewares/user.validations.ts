import Joi, { ValidationError } from 'joi'

import { UserDto } from '../models/dto/user.dto'

/**
 * Validation class for user-related operations.
 **/
export class UserValidations {
  /**
   * Validates the data for creating a new user.
   * @param {UserDto} userDto - The data transfer object containing user details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   **/
  static async createUser(userDto: UserDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const createSchema = Joi.object({
      username: Joi.string().min(4).required(),
      fullname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      avatar: Joi.string(),
    })

    // Validate the booking data against the schema
    try {
      await createSchema.validateAsync(userDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }

  /**
   * Validates the data for updating an existing user.
   * @param {UserDto} userDto - The data transfer object containing updated user details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   **/
  static async updateUser(userDto: UserDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const updateSchema = Joi.object({
      username: Joi.string().min(4),
      fullname: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(8),
      avatar: Joi.string(),
    }).min(1) // Ensure at least one field is provided for update

    try {
      await updateSchema.validateAsync(userDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
