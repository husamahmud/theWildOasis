import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'

export async function getAllCabins() {
  try {
    const data = await axios.get(`${BASE_URL}/cabins`)
    return data?.data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error getting cabins')
  }
}
