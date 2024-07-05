import prisma from '../prisma/prisma-client'

import { BookingsI } from '../../types/bookings.interface'
import { BookingsDto } from '../dto/bookings.dto'

/**
 * Data Access Object (DAO) for interacting with the Bookings table in the database
 **/
export class BookingsDao {
  /**
   * Create a new booking
   * @param booking - Booking data
   * @returns The booking created
   **/
  static async createBooking(booking: BookingsDto): Promise<BookingsI> {
    try {
      return await prisma.bookings.create({ data: booking })
    } catch (error: any) {
      console.error('Error in BookingsDao -> createBooking', error)
      throw new Error(error.message)
    }
  }

  /**
   * Get all bookings
   * @returns All bookings
   **/
  static async getAllBookings(): Promise<BookingsI[]> {
    try {
      return await prisma.bookings.findMany()
    } catch (error: any) {
      console.error('Error in BookingsDao -> getBookings', error)
      throw new Error(error.message)
    }
  }

  /**
   * Get a booking by id
   * @param id - Booking id
   * @returns The booking found or null if the booking is not found
   **/
  static async getBookingById(id: string): Promise<BookingsI | null> {
    try {
      return await prisma.bookings.findUnique({ where: { id } })
    } catch (error: any) {
      console.error('Error in BookingsDao -> getBookingById', error)
      throw new Error(error.message)
    }
  }

  /**
   * Update a booking
   * @param id - Booking id
   * @param booking - Booking data
   * @returns The booking updated or null if the booking is not found
   **/
  static async updateBooking(id: string, booking: BookingsDto): Promise<BookingsI> {
    try {
      return await prisma.bookings.update({ where: { id }, data: booking })
    } catch (error: any) {
      console.error('Error in BookingsDao -> updateBooking', error)
      throw new Error(error.message)
    }
  }

  /**
   * Delete a booking
   * @param id - Booking id
   * @returns The booking deleted or null if the booking is not found
   **/
  static async deleteBooking(id: string): Promise<BookingsI> {
    try {
      return await prisma.bookings.delete({ where: { id } })
    } catch (error: any) {
      console.error('Error in BookingsDao -> deleteBooking', error)
      throw new Error(error.message)
    }
  }

  /**
   * Get all bookings that overlap with the date range
   * @param cabinId - Cabin id
   * @param startDate - Start date
   * @param endDate - End date
   * @returns All bookings that overlap with the date range
   **/
  static async getOverlappingBookings(cabinId: string, startDate: Date, endDate: Date): Promise<BookingsI[]> {
    try {
      return await prisma.bookings.findMany({
        where: {
          cabinId,
          OR: [
            {
              AND: [
                { startDate: { lte: startDate } },
                { endDate: { gte: startDate } },
              ],
            },
            {
              AND: [
                { startDate: { lte: endDate } },
                { endDate: { gte: endDate } },
              ],
            },
            {
              AND: [
                { startDate: { gte: startDate } },
                { endDate: { lte: endDate } },
              ],
            },
          ],
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> getOverlappingBookings', error)
      throw new Error(error.message)
    }
  }
}
