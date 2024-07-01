import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'
import { CabinI } from '../types/cabins.interface.ts'

export async function getAllCabins() {
  try {
    const result = await axios.get(`${BASE_URL}/cabins`)
    return result?.data
  } catch (error) {
    throw new Error('Error getting cabins')
  }
}

export async function addCabin(cabin: CabinI) {
  try {
    const result = await axios.post(`${BASE_URL}/cabins`, cabin)
    return result?.data
  } catch (error: any) {
    // Access the error response data
    if (error.response.data.message === 'Cabin already exists') {
      throw new Error(error?.response?.data.message)
    } else if (error.response.data.message.details[0].message) {
      throw new Error(error?.response?.data.message.details[0].message)
    } else {
      throw new Error('Error adding cabin')
    }
  }
}

export async function deleteCabin(cabinNumber: string) {
  try {
    const result = await axios.delete(`${BASE_URL}/cabins/${cabinNumber}`)
    return result?.data
  } catch (error) {
    throw new Error('Error deleting cabin')
  }
}
