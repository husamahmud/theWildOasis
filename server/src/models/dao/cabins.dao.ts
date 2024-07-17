import prisma from '../prisma/prisma-client'

import { CabinI } from '../../types/cabins.interface'
import { CabinsDto } from '../dto/cabins.dto'

/**
 * Data Access Object (DAO) for interacting with the Cabins table in the database.
 */
export class CabinsDao {
  /**
   * Creates a new cabin entry in the database.
   * @param {CabinsDto} cabin - The data transfer object containing cabin details.
   * @returns {Promise<CabinI>} - A promise that resolves to the created cabin object.
   */
  static async createCabin(cabin: CabinsDto): Promise<CabinI> {
    try {
      return await prisma.cabins.create({ data: cabin })
    } catch (error: any) {
      console.error('Error in CabinsDao -> createCabin', error)
      throw new Error(error.message)
    }
  }

  /**
   * Updates an existing cabin entry in the database.
   * @param {string} id - The unique identifier of the cabin to be updated.
   * @param {CabinsDto} cabin - The data transfer object containing updated cabin details.
   * @returns {Promise<CabinI>} - A promise that resolves to the updated cabin object.
   */
  static async updateCabin(id: string, cabin: CabinsDto): Promise<CabinI> {
    try {
      return await prisma.cabins.update({ where: { id }, data: cabin })
    } catch (error: any) {
      console.error('Error in CabinsDao -> updateCabin', error)
      throw new Error(error.message)
    }
  }

  /**
   * Retrieves all cabin entries from the database.
   * @returns {Promise<CabinI[] | []>} - A promise that resolves to an array of cabin objects or an empty array if no cabins are found.
   */
  static async getAllCabins(): Promise<CabinI[] | []> {
    try {
      return await prisma.cabins.findMany()
    } catch (error: any) {
      console.error('Error in CabinsDao -> getAllCabins', error)
      throw new Error(error.message)
    }
  }

  /**
   * Retrieves a specific cabin entry from the database by its cabin number.
   * @param {string} id - The unique identifier of the cabin to be retrieved.
   * @returns {Promise<CabinI | null>} - A promise that resolves to the cabin object if found, or null if not found.
   */
  static async getCabin(id: string): Promise<CabinI | null> {
    try {
      return await prisma.cabins.findUnique({ where: { id } })
    } catch (error: any) {
      console.error('Error in CabinsDao -> getCabin', error)
      throw new Error(error.message)
    }
  }

  /**
   * Retrieves a specific cabin entry from the database by its cabin number.
   * @param {string} cabinNumber - The cabin number of the cabin to be retrieved.
   * @returns {Promise<CabinI | null>} - A promise that resolves to the cabin object if found, or null if not found.
   **/
  static async getCabinByNumber(cabinNumber: string): Promise<CabinI | null> {
    try {
      return await prisma.cabins.findUnique({ where: { cabinNumber } })
    } catch (error: any) {
      console.error('Error in CabinsDao -> getCabinByNumber', error)
      throw new Error(error.message)
    }
  }

  /**
   * Deletes a specific cabin entry from the database by its cabin number.
   * @param {string} id - The unique identifier of the cabin to be deleted.
   * @returns {Promise<CabinI | null>} - A promise that resolves to the deleted cabin object if found, or null if not found.
   **/
  static async deleteCabin(id: string): Promise<CabinI | null> {
    try {
      return await prisma.cabins.delete({ where: { id } })
    } catch (error: any) {
      console.error('Error in CabinsDao -> deleteCabin', error)
      throw new Error(error.message)
    }
  }

  /**
   * Deletes all cabin entries from the database.
   * @returns {Promise<void>} - A promise that resolves when all cabins have been deleted.
   **/
  static async deleteAllCabins(): Promise<void> {
    try {
      await prisma.cabins.deleteMany()
    } catch (error: any) {
      console.error('Error in CabinsDao -> deleteAllCabins', error)
      throw new Error(error.message)
    }
  }
}
