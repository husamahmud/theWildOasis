import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'
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

export async function getSettingId() {
  try {
    const response = await axios.get(`${BASE_URL}/settings/`)
    return response.data.data.id
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || 'Error getting settings by ID',
      )
    } else {
      throw new Error('Error getting settings by ID')
    }
  }
}

export const updateSettings = async (settings: SettingsI) => {
  try {
    const settingsId = await getSettingId()

    const response = await axios.post(
      `${BASE_URL}/settings/${settingsId}`,
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
