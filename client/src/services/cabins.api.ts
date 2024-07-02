import axios from 'axios'

import { BASE_URL } from '../utils/constants.ts'
import { CabinI } from '../types/cabins.interface.ts'

/**
 * getAllCabins - Fetches all cabins from the database
 **/
export async function getAllCabins() {
  try {
    const response = await axios.get(`${BASE_URL}/cabins`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error getting all cabin')
    } else {
      throw new Error('Error updating cabin')
    }
  }
}

/**
 * addCabin - Adds a new cabin to the database
 **/
export async function addCabin(cabin: CabinI) {
  try {
    const response = await axios.post(`${BASE_URL}/cabins`, cabin)
    return response.data
  } catch (error: any) {
    if (error.response.data.message === 'Cabin already exists') {
      throw new Error(error?.response?.data.message)
    } else if (error.response.data.message.details[0].message) {
      throw new Error(error?.response?.data.message.details[0].message)
    } else {
      throw new Error('Error adding cabin')
    }
  }
}

/**
 * updateCabin - Updates a cabin in the database
 **/
export async function updateCabin(cabin: CabinI) {
  try {
    const response = await axios.post(`${BASE_URL}/cabins/${cabin.id}`, cabin)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error updating cabin')
    } else {
      throw new Error('Error updating cabin')
    }
  }
}

/**
 * deleteCabin - Deletes a cabin from the database
 **/
export async function deleteCabin(id: string) {
  try {
    const data = await axios.delete(`${BASE_URL}/cabins/${id}`)
    return data?.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error deleting cabin')
    } else {
      throw new Error('Error updating cabin')
    }
  }
}
