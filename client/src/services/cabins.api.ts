import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'
import { CabinI } from '../types/cabins.interface.ts'

export async function getAllCabins() {
  try {
    const data = await axios.get(`${BASE_URL}/cabins`)
    return data?.data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error getting cabins')
  }
}

export async function addCabin(cabin: CabinI) {
  try {
    const data = await axios.post(`${BASE_URL}/cabins`, cabin)
    return data?.data
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

export async function deleteCabin(id: string) {
  try {
    const data = await axios.delete(`${BASE_URL}/cabins/${id}`)
    return data?.data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error deleting cabin')
  }
}
