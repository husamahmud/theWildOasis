import Joi, { ValidationError } from 'joi'

import { BookingsDto } from '../models/dto/bookings.dto'

const BookingStatus = ['CHECKED_IN', 'CHECKED_OUT', 'UNCONFIRMED']

/**
 * Validation class for booking-related operations.
 **/
export class BookingsValidations {
  /**
   * Validates the data for creating a new booking.
   * @param {BookingsDto} bookingDto - The data transfer object containing booking details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   **/
  static async createBooking(bookingDto: BookingsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const createSchema = Joi.object({
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      numNight: Joi.number().required(),
      numGuest: Joi.number().required(),
      cabinPrice: Joi.number().required(),
      totalPrice: Joi.number().required(),
      status: Joi.string().valid(...BookingStatus).required(),
      hasBreakfast: Joi.boolean().required(),
      isPaid: Joi.boolean().required(),
      observation: Joi.string().trim().required(),
      guest: Joi.object().required(),
      cabin: Joi.object().required(),
    })

    // Validate the booking data against the schema
    try {
      await createSchema.validateAsync(bookingDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }

  /**
   * Validates the data for updating an existing booking.
   * @param {BookingsDto} bookingDto - The data transfer object containing updated booking details.
   * @returns {Promise<{ error: Joi.ValidationError | null }>} - A promise that resolves to an object with an error property.
   **/
  static async updateBooking(bookingDto: BookingsDto): Promise<{
    error: Joi.ValidationError | null
  }> {
    const updateSchema = Joi.object({
      startDate: Joi.date(),
      endDate: Joi.date(),
      numNight: Joi.number(),
      numGuest: Joi.number(),
      cabinPrice: Joi.number(),
      totalPrice: Joi.number(),
      status: Joi.string().valid(...BookingStatus),
      hasBreakfast: Joi.boolean(),
      isPaid: Joi.boolean(),
      observation: Joi.string().trim(),
      guest: Joi.object(),
      cabin: Joi.object(),
    }).min(1) // Ensure at least one field is provided for update

    try {
      await updateSchema.validateAsync(bookingDto)
      return { error: null }
    } catch (error) {
      return { error: error as ValidationError }
    }
  }
}
