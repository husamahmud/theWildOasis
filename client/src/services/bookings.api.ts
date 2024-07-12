import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'

/**
 * getAllBookings - Fetches all bookings from the database
 **/
export async function getAllBookings() {
  try {
    const response = await axios.get(`${BASE_URL}/bookings`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || 'Error getting all bookings',
      )
    } else {
      throw new Error('Error updating bookings')
    }
  }
}

/**
 * getBookingById - Fetches a booking by ID from the database
 **/
export async function getBookingById(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/bookings/${id}`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || 'Error getting booking by ID',
      )
    } else {
      throw new Error('Error updating booking')
    }
  }
}
