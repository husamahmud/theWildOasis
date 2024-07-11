import prisma from '../prisma/prisma-client'

import { SettingsI } from '../../types/settings.interface'

/**
 * Data Access Object (DAO) for interacting with the Settings table in the database.
 */
export class SettingsDao {
  /**
   * Update the settings entry in the database.
   * @param {string} id - The unique identifier of the settings to be updated.
   * @param {SettingsI} settings - The settings object to be created.
   * @returns {Promise<SettingsI>} - A promise that resolves to the created settings object.
   */
  static async updateSettings(id: string, settings: SettingsI): Promise<SettingsI> {
    try {
      return await prisma.settings.update({ where: { id }, data: settings })
    } catch (error: any) {
      console.error('Error in SettingsDao -> updateSettings', error)
      throw new Error(error.message)
    }
  }

  /**
   * Retrieves the settings entry from the database.
   * @returns {Promise<SettingsI>} - A promise that resolves to the settings object.
   **/
  static async getSettings(): Promise<SettingsI | null> {
    try {
      return await prisma.settings.findFirst()
    } catch (error: any) {
      console.error('Error in SettingsDao -> getSettings', error)
      throw new Error(error.message)
    }
  }
}
