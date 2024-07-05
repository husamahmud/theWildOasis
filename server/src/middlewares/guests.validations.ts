import Joi, { ValidationError } from 'joi'

import { GuestsDto } from '../models/dto/guests.dto'

/**
 * Validation class for guest-related operations.
 */
export class GuestsValidations {
  /**
   * Validates the data for creating a new guest.
   * @param {GuestsDto} guestDto - The data transfer object containing guest details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   */
  static async createGuest(guestDto: GuestsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const createSchema = Joi.object({
      fullName: Joi.string().trim().required(),
      email: Joi.string().trim().required(),
      nationality: Joi.string().trim().required(),
      nationalID: Joi.string().trim().required(),
      countryFlag: Joi.string().trim().required(),
    })

    try {
      await createSchema.validateAsync(guestDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }

  /**
   * Validates the data for updating an existing guest.
   * @param {GuestsDto} guestDto - The data transfer object containing updated guest details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   */
  static async updateGuest(guestDto: GuestsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const updateSchema = Joi.object({
      fullName: Joi.string().trim(),
      email: Joi.string().trim(),
      nationality: Joi.string().trim(),
      nationalID: Joi.string().trim(),
      countryFlag: Joi.string().trim(),
    }).min(1)

    try {
      await updateSchema.validateAsync(guestDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
