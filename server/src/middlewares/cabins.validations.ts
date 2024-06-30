import Joi, { ValidationError } from 'joi'

import { CabinsDto } from '../models/dto/cabins.dto'

/**
 * Validation class for cabin-related operations.
 */
export class CabinsValidations {
  /**
   * Validates the data for creating a new cabin.
   * @param {CabinsDto} cabinDto - The data transfer object containing cabin details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   */
  static async createCabin(cabinDto: CabinsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const createSchema = Joi.object({
      cabinNumber: Joi.string().trim().trim().required(),
      maxCapacity: Joi.number().required(),
      regularPrice: Joi.number().required(),
      discount: Joi.number().required(),
      description: Joi.string().trim().required(),
      image: Joi.string().trim().required(),
      Bookings: Joi.array().optional(),
    })

    // Validate the cabin data against the schema
    try {
      await createSchema.validateAsync(cabinDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }

  /**
   * Validates the data for updating an existing cabin.
   * @param {CabinsDto} cabinDto - The data transfer object containing updated cabin details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   */
  static async updateCabin(cabinDto: CabinsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const updateSchema = Joi.object({
      cabinNumber: Joi.string(),
      maxCapacity: Joi.number(),
      regularPrice: Joi.number(),
      discount: Joi.number(),
      description: Joi.string(),
      image: Joi.string(),
      Bookings: Joi.array(),
    }).min(1) // Ensure at least one field is provided for update

    try {
      await updateSchema.validateAsync(cabinDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
