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
  static async getBookings(): Promise<BookingsI[]> {
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
   * Get all bookings by gues id
   * @param guestId - Gues id
   * @returns All bookings found by gues id or empty array if no booking is found
   **/
  static async getBookingByGuesId(guestId: string): Promise<BookingsI[]> {
    try {
      return await prisma.bookings.findMany({ where: { guestId } })
    } catch (error: any) {
      console.error('Error in BookingsDao -> getBookingByUserId', error)
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
}
