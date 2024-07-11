import Joi, { ValidationError } from 'joi'

import { UserDto } from '../models/dto/user.dto'

/**
 * Validation class for authentication-related operations.
 **/
export class AuthValidations {
  /**
   * Validates the data for user registration.
   * @param {UserDto} userDto - The data transfer object containing user details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   **/
  static async login(userDto: Partial<UserDto>): Promise<{
    error: Joi.ValidationError | null
  }> {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      isRememberMe: Joi.boolean().required(),
      password: Joi.string().min(8).required(),
    })

    try {
      await loginSchema.validateAsync(userDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
