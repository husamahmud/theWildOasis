import { Request, Response } from 'express'

import { sendResponse } from '../utils/sendRequest'
import validateBookingDates from '../utils/validateBookingDates'

import { BookingsDto } from '../models/dto/bookings.dto'
import { BookingsDao } from '../models/dao/bookings.dao'
import { BookingsValidations } from '../middlewares/bookings.validations'
import { CabinsDao } from '../models/dao/cabins.dao'
import { GuestsDao } from '../models/dao/guests.dao'

/**
 *  Controller class for handling bookings-related operations
 **/
export class BookingsController {
  /**
   * Handle creating a new booking
   **/
  static async createBooking(req: Request, res: Response) {
    const bookingDto = new BookingsDto(req.body)
    bookingDto.startDate = new Date(bookingDto.startDate)
    bookingDto.endDate = new Date(bookingDto.endDate)

    // Validate the booking data
    const { error } = await BookingsValidations.createBooking(bookingDto)
    if (error) {
      console.error('Error: create booking', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the cabin exists
      const cabin = await CabinsDao.getCabin(bookingDto.cabin.id)
      if (!cabin) {
        console.error('Error: Cabin not found')
        return sendResponse(res, 404, null, 'Cabin not found')
      }

      // Check if the guest exists
      const guest = await GuestsDao.getGuest(bookingDto.guest.id)
      if (!guest) {
        console.error('Error: Guest not found')
        return sendResponse(res, 404, null, 'Guest not found')
      }

      // Check if the start date is in the past
      const dataValidation = validateBookingDates(
        bookingDto.startDate,
        bookingDto.endDate,
        bookingDto.numNight,
      )
      if (!dataValidation.isValid) {
        console.error('Error: create booking', dataValidation.error)
        return sendResponse(res, 400, null, dataValidation.error)
      }

      // Check if there are overlapping bookings
      const overlappingBookings = await BookingsDao.getOverlappingBookings(
        bookingDto.cabin.id,
        bookingDto.startDate,
        bookingDto.endDate,
      )
      if (overlappingBookings.length > 0) {
        console.error('Error: Overlapping bookings found')
        return sendResponse(res, 400, null, 'Overlapping bookings found')
      }

      // Create the booking
      const booking = await BookingsDao.createBooking(bookingDto)
      console.log('Booking created successfully')
      return sendResponse(res, 201, booking, 'Booking created successfully')
    } catch (error: any) {
      console.error('Error: create booking', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handle getting all bookings
   **/
  static async getAllBookings(req: Request, res: Response) {
    try {
      const bookings = await BookingsDao.getAllBookings()
      console.log('Bookings retrieved successfully')
      return sendResponse(res, 200, bookings, 'Bookings retrieved successfully')
    } catch (error: any) {
      console.error('Error: get all bookings', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handle getting a booking by ID
   **/
  static async getBookingById(req: Request, res: Response) {
    const id = req.params.id

    try {
      const booking = await BookingsDao.getBookingById(id)
      if (!booking) {
        console.error('Error: Booking not found')
        return sendResponse(res, 404, null, 'Booking not found')
      }

      console.log('Booking retrieved successfully')
      return sendResponse(res, 200, booking, 'Booking retrieved successfully')
    } catch (error: any) {
      console.error('Error: get booking by ID', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handle updating a booking
   **/
  static async updateBooking(req: Request, res: Response) {
    const id = req.params.id
    const bookingDto = new BookingsDto(req.body)

    // Validate the booking data
    const { error } = await BookingsValidations.updateBooking(bookingDto)
    if (error) {
      console.error('Error: update booking', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the booking exists
      const booking = await BookingsDao.getBookingById(id)
      if (!booking) {
        console.error('Error: Booking not found')
        return sendResponse(res, 404, null, 'Booking not found')
      }

      // Check if the start date is in the past
      if (bookingDto.startDate || bookingDto.endDate) {
        bookingDto.startDate = new Date(bookingDto.startDate)
        bookingDto.endDate = new Date(bookingDto.endDate)
        const dataValidation = validateBookingDates(bookingDto.startDate, bookingDto.endDate, bookingDto.numNight)
        if (!dataValidation.isValid) {
          console.error('Error: update booking', dataValidation.error)
          return sendResponse(res, 400, null, dataValidation.error)
        }
      }

      // Check if there are overlapping bookings
      const overlappingBookings = await BookingsDao.getOverlappingBookings(
        bookingDto.cabin.id,
        bookingDto.startDate,
        bookingDto.endDate,
      )
      if (overlappingBookings.length > 0) {
        console.error('Error: Overlapping bookings found')
        return sendResponse(res, 400, null, 'Overlapping bookings found')
      }

      // Update the booking
      const updatedBooking = await BookingsDao.updateBooking(id, bookingDto)
      console.log('Booking updated successfully')
      return sendResponse(res, 200, updatedBooking, 'Booking updated successfully')
    } catch (error: any) {
      console.error('Error: update booking', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handle deleting a booking
   **/
  static async deleteBooking(req: Request, res: Response) {
    const id = req.params.id

    try {
      // Check if the booking exists
      const booking = await BookingsDao.getBookingById(id)
      if (!booking) {
        console.error('Error: Booking not found')
        return sendResponse(res, 404, null, 'Booking not found')
      }

      // Delete the booking
      await BookingsDao.deleteBooking(id)
      console.log('Booking deleted successfully')
      return sendResponse(res, 204, null, 'Booking deleted successfully')
    } catch (error: any) {
      console.error('Error: delete booking', error)
      return sendResponse(res, 500, null, error)
    }
  }
}
