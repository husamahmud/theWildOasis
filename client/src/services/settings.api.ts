import axios from 'axios'

import { BASE_URL, SETTINGS_ID } from '../utils/constants.ts'
import { SettingsI } from '../types/settings.interface.ts'

export async function getAllSettings() {
  try {
    const response = await axios.get(`${BASE_URL}/settings`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || 'Error getting all settings',
      )
    } else {
      throw new Error('Error getting all settings')
    }
  }
}

export const updateSettings = async (settings: SettingsI) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/settings/${SETTINGS_ID}`,
      settings,
    )
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error updating settings')
    } else {
      throw new Error('Error updating settings')
    }
  }
}
