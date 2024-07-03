import prisma from '../prisma/prisma-client'

import { GuestsI } from '../../types/guests.interface'
import { GuestsDto } from '../dto/guests.dto'

/**
 * Data Access Object (DAO) for interacting with the Guests table in the database.
 **/
export class GuestsDao {
  /**
   * Creates a new guest entry in the database.
   * @param {GuestsDto} guest - The data transfer object containing guest details.
   * @returns {Promise<GuestsI>} - A promise that resolves to the created guest object.
   */
  static async createGuest(guest: GuestsDto): Promise<GuestsI> {
    return prisma.guests.create({ data: guest })
  }

  /**
   * Updates an existing guest entry in the database.
   * @param {string} id - The unique identifier of the guest to be updated.
   * @param {GuestsDto} guest - The data transfer object containing updated guest details.
   * @returns {Promise<GuestsI>} - A promise that resolves to the updated guest object.
   */
  static async updateGuest(id: string, guest: GuestsDto): Promise<GuestsI> {
    return prisma.guests.update({ where: { id }, data: guest })
  }

  /**
   * Retrieves all guest entries from the database.
   * @returns {Promise<GuestsI[] | []>} - A promise that resolves to an array of guest objects or an empty array if no guests are found.
   */
  static async getAllGuests(): Promise<GuestsI[] | []> {
    return prisma.guests.findMany()
  }

  /**
   * Retrieves a specific guest entry from the database by its unique identifier.
   * @param {string} id - The unique identifier of the guest to be retrieved.
   * @returns {Promise<GuestsI | null>} - A promise that resolves to the guest object if found, or null if not found.
   */
  static async getGuest(id: string): Promise<GuestsI | null> {
    return prisma.guests.findUnique({ where: { id } })
  }

  /**
   * Retrieves a specific guest entry from the database by their email address.
   * @param {string} email - The email address of the guest to be retrieved.
   * @returns {Promise<GuestsI | null>} - A promise that resolves to the guest object if found, or null if not found.
   **/
  static async getGuestByEmail(email: string): Promise<GuestsI | null> {
    return prisma.guests.findUnique({ where: { email } })
  }

  /**
   * Retrieves a specific guest entry from the database by their national ID.
   * @param {string} nationalID - The national ID of the guest to be retrieved.
   * @returns {Promise<GuestsI | null>} - A promise that resolves to the guest object if found, or null if not found.
   **/
  static async getGuestByNationalID(nationalID: string): Promise<GuestsI | null> {
    return prisma.guests.findUnique({ where: { nationalID } })
  }

  /**
   * Deletes a specific guest entry from the database by its unique identifier.
   * @param {string} id - The unique identifier of the guest to be deleted.
   * @returns {Promise<GuestsI | null>} - A promise that resolves to the deleted guest object if found, or null if not found.
   */
  static async deleteGuest(id: string): Promise<GuestsI | null> {
    return prisma.guests.delete({ where: { id } })
  }
}
