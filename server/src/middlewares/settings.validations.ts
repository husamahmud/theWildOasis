import Joi, { ValidationError } from 'joi'

import { SettingsDto } from '../models/dto/settings.dto'

export class SettingsValidations {
  /**
   * Validates the data for creating a new settings entry.
   * @param {SettingsDto} settingsDto - The data transfer object containing settings details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property
   **/
  static async createSettings(settingsDto: SettingsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const createSchema = Joi.object({
      minBookingLen: Joi.number().required().min(1),
      maxBookingLen: Joi.number().required().max(90),
      maxGuests: Joi.number().required().min(1),
      breakfastCost: Joi.number().required().min(0),
    })

    try {
      await createSchema.validateAsync(settingsDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }

  /**
   * Validates the data for updating the settings.
   * @param {SettingsDto} settingsDto - The data transfer object containing updated settings details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   */
  static async updateSettings(settingsDto: SettingsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const updateSchema = Joi.object({
      minBookingLen: Joi.number().min(1),
      maxBookingLen: Joi.number().max(90),
      maxGuests: Joi.number().min(1),
      breakfastCost: Joi.number().min(0),
    }).min(1)

    try {
      await updateSchema.validateAsync(settingsDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
