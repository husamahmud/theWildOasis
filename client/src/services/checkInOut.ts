import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'

/**
 * checkInOutBooking - Checks in/out a booking
 **/
export async function checkInOutBooking(id: string) {
  try {
    const response = await axios.post(`${BASE_URL}/bookings/check-in-out/${id}`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || 'Error checking in/out booking',
      )
    } else {
      throw new Error('Error checking in/out booking')
    }
  }
}
