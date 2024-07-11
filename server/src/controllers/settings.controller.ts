import { Request, Response } from 'express'

import { sendResponse } from '../utils/sendRequest'

import { SettingsDto } from '../models/dto/settings.dto'
import { SettingsValidations } from '../middlewares/settings.validations'
import { SettingsDao } from '../models/dao/settings.dao'

export class SettingsController {
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
