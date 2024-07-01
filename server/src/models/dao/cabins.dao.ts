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
    return prisma.cabins.create({ data: cabin })
  }

  /**
   * Updates an existing cabin entry in the database.
   * @param {string} id - The unique identifier of the cabin to be updated.
   * @param {CabinsDto} cabin - The data transfer object containing updated cabin details.
   * @returns {Promise<CabinI>} - A promise that resolves to the updated cabin object.
   */
  static async updateCabin(id: string, cabin: CabinsDto): Promise<CabinI> {
    return prisma.cabins.update({ where: { id }, data: cabin })
  }

  /**
   * Retrieves all cabin entries from the database.
   * @returns {Promise<CabinI[] | []>} - A promise that resolves to an array of cabin objects or an empty array if no cabins are found.
   */
  static async getAllCabins(): Promise<CabinI[] | []> {
    return prisma.cabins.findMany()
  }

  /**
   * Retrieves a specific cabin entry from the database by its cabin number.
   * @param {string} id - The unique identifier of the cabin to be retrieved.
   * @returns {Promise<CabinI | null>} - A promise that resolves to the cabin object if found, or null if not found.
   */
  static async getCabin(id: string): Promise<CabinI | null> {
    return prisma.cabins.findUnique({ where: { id } })
  }

  /**
   * Deletes a specific cabin entry from the database by its cabin number.
   * @param {string} id - The unique identifier of the cabin to be deleted.
   * @returns {Promise<CabinI | null>} - A promise that resolves to the deleted cabin object if found, or null if not found.
   */
  static async deleteCabin(id: string): Promise<CabinI | null> {
    return prisma.cabins.delete({ where: { id } })
  }
}
