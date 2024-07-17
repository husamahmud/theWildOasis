import axios from 'axios'

import { BASE_URL } from '../utils/constants'
import { LoginI, RegisterI, UserI } from '../types/auth.interface.ts'

export async function login(data: LoginI) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data)
    console.log('login response:', response.data)
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
    console.log('register response:', response.data)
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
    console.log('logout response:', response.data)
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

export async function getUser(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/auth/user/${id}`)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error fetching user')
    } else {
      throw new Error('Error fetching user')
    }
  }
}

export async function updateUser(id: string, data: UserI) {
  try {
    const response = await axios.put(`${BASE_URL}/auth/update/${id}`, data)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Error updating user')
    } else {
      throw new Error('Error updating user')
    }
  }
}
