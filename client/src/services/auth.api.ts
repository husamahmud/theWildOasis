import axios from 'axios'

import { BASE_URL } from '../utils/constants'
import { LoginI, RegisterI } from '../types/auth.interface.ts'

export async function login(data: LoginI) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error logging in')
    } else {
      throw new Error('Error logging in')
    }
  }
}

export async function register(data: RegisterI) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, data)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error registering')
    } else {
      throw new Error('Error registering')
    }
  }
}

export async function logout() {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error logging out')
    } else {
      throw new Error('Error logging out')
    }
  }
}
