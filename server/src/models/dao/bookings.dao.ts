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
      const { guest, cabin, ...bookingData } = booking
      return await prisma.bookings.create({
        data: {
          ...bookingData,
          guestId: guest.id,
          cabinId: cabin.id,
        },
        include: {
          guest: true,
          cabin: true,
        },
      })
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
      return await prisma.bookings.findMany({
        include: {
          guest: true,
          cabin: true,
        },
      })
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
      return await prisma.bookings.findUnique({
        where: { id },
        include: {
          guest: true,
          cabin: true,
        },
      })
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
      const existingBooking = await prisma.bookings.findUnique({
        where: { id },
        include: {
          guest: true,
          cabin: true,
        },
      })
      if (!existingBooking) {
        throw new Error('Booking not found')
      }

      const { guest, cabin, ...bookingData } = booking
      const updateData: any = { ...bookingData }

      if (guest.id !== existingBooking.guest.id) {
        updateData.guestId = guest.id
      }
      if (cabin.id !== existingBooking.cabin.id) {
        updateData.cabinId = cabin.id
      }

      return await prisma.bookings.update({
        where: { id },
        data: updateData,
        include: {
          guest: true,
          cabin: true,
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> updateBooking', error)
      throw new Error(error.message)
    }
  }

  /**
   * Check in or check out a booking
   * @param id - Booking id
   * @returns The booking updated or null if the booking is not found
   **/
  static async checkOutBooking(id: string): Promise<BookingsI> {
    try {
      return await prisma.bookings.update({
        where: { id },
        data: {
          status: 'CHECKED_OUT',
        },
        include: {
          guest: true,
          cabin: true,
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> checkInOutBooking', error)
      throw new Error(error.message)
    }
  }

  /**
   * Check in or check out a booking
   * @param id - Booking id
   * @returns The booking updated or null if the booking is not found
   **/
  static async checkInBooking(id: string): Promise<BookingsI> {
    try {
      return await prisma.bookings.update({
        where: { id },
        data: {
          status: 'CHECKED_IN',
        },
        include: {
          guest: true,
          cabin: true,
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> checkInOutBooking', error)
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
      return await prisma.bookings.delete({
        where: { id },
        include: {
          guest: true,
          cabin: true,
        },
      })
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
        include: {
          guest: true,
          cabin: true,
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> getOverlappingBookings', error)
      throw new Error(error.message)
    }
  }

  /**
   * Get all bookings after a date
   * @param date - Date
   * @returns All bookings after the date
   **/
  static async getBookingsAfterDate(date: Date): Promise<BookingsI[]> {
    try {
      return await prisma.bookings.findMany({
        where: {
          startDate: { gte: date },
        },
        include: {
          guest: true,
          cabin: true,
        },
      })
    } catch (error: any) {
      console.error('Error in BookingsDao -> getBookingAfterDate', error)
      throw new Error(error.message)
    }
  }

  /**
   * Delete all bookings
   **/
  static async deleteAllBookings(): Promise<void> {
    try {
      await prisma.bookings.deleteMany({})
    } catch (error: any) {
      console.error('Error in BookingsDao -> deleteAllBookings', error)
      throw new Error(error.message)
    }
  }
}
