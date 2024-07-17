import { Request, Response } from 'express'

import { sendResponse } from '../utils/sendRequest'

import { SettingsDto } from '../models/dto/settings.dto'
import { SettingsValidations } from '../middlewares/settings.validations'
import { SettingsDao } from '../models/dao/settings.dao'

export class SettingsController {
  static async createSettings(req: Request, res: Response) {
    const settingsDto = new SettingsDto(req.body)

    const { error } = await SettingsValidations.createSettings(settingsDto)
    if (error) {
      console.error('Error: create settings', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Create the settings
      const createdSettings = await SettingsDao.createSettings(settingsDto)
      if (!createdSettings) {
        console.error('Error: settings not created')
        return sendResponse(res, 500, null, 'Settings not created')
      }

      console.log('Settings created successfully')
      return sendResponse(res, 201, createdSettings, 'Settings created successfully')
    } catch (error: any) {
      console.error('Error: create settings', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Create a new settings entry in the database.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} - A promise that resolves to the response object.
   **/
  static async updateSettings(req: Request, res: Response) {
    const settingsDto = new SettingsDto(req.body)
    const id = req.params.id

    const { error } = await SettingsValidations.updateSettings(settingsDto)
    if (error) {
      console.error('Error: update user', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Update the settings
      const updatedSettings = await SettingsDao.updateSettings(id, settingsDto)
      if (!updatedSettings) {
        console.error('Error: settings not updated')
        return sendResponse(res, 500, null, 'Settings not updated')
      }

      console.log('Settings updated successfully')
      return sendResponse(res, 200, updatedSettings, 'Settings updated successfully')
    } catch (error: any) {
      console.error('Error: update settings', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Create a new settings entry in the database.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} - A promise that resolves to the response object.
   **/
  static async getSettings(req: Request, res: Response) {
    try {
      // Get the settings
      const settings = await SettingsDao.getSettings()
      if (!settings) {
        console.error('Error: settings not found')
        return sendResponse(res, 404, null, 'Settings not found')
      }

      console.log('Settings retrieved successfully')
      return sendResponse(res, 200, settings, 'Settings retrieved successfully')
    } catch (error: any) {
      console.error('Error: get settings', error)
      return sendResponse(res, 500, null, error)
    }
  }
}
