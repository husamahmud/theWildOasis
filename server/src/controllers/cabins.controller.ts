import { Request, Response } from 'express'

import prisma from '../models/prisma/prisma-client'
import sendResponse from '../utils/sendRequest'

import { CabinsDto } from '../models/dto/cabins.dto'
import { CabinsValidations } from '../middlewares/cabins.validations'
import { CabinsDao } from '../models/dao/cabins.dao'

// import { generateImageUrl } from '../services/supabase.service'

export class CabinsController {
  static async createCabin(req: Request, res: Response) {
    const cabinDto = new CabinsDto(req.body)
    const { bookings, ...cabinData } = cabinDto

    try {
      const { error } = await CabinsValidations.createCabin(cabinData)
      if (error) {
        console.error('Error: cabin validation', error)
        return sendResponse(res, 400, null, error)
      }

      const cabinNumber = cabinData.cabinNumber
      const existingCabin = await prisma.cabins.findUnique({
        where: { cabinNumber },
      })
      if (existingCabin) {
        console.error('Error: cabin already exists')
        return sendResponse(res, 400, null, 'Cabin already exists')
      }

      // TODO
      // const imageUrl = await generateImageUrl(cabinData.image)
      // cabinData.image = imageUrl

      const cabin = await CabinsDao.createCabin(cabinData)
      console.log('Cabin created successfully')
      return sendResponse(res, 201, cabin, 'Cabin created successfully')
    } catch (error: any) {
      console.log('Error: create cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }

  static async updateCabin(req: Request, res: Response) {
    const cabinDto = new CabinsDto(req.body)
    const cabinNumber = req.params.cabinNumber
    const { bookings, ...cabinData } = cabinDto

    try {
      const { error } = await CabinsValidations.updateCabin(cabinData)
      if (error) {
        console.error('Error: cabin validation', error)
        return sendResponse(res, 400, null, error)
      }

      const existingCabin = await prisma.cabins.findUnique({
        where: { cabinNumber },
      })
      if (!existingCabin) {
        console.error('Error: cabin not found')
        return sendResponse(res, 404, null, 'Cabin not found')
      }

      const cabin = await CabinsDao.updateCabin(cabinNumber, cabinData)
      console.log('Cabin updated successfully')
      return sendResponse(res, 200, cabin, 'Cabin updated successfully')
    } catch (error: any) {
      console.log('Error: update cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }

  static async getAllCabins(req: Request, res: Response) {
    try {
      const cabins = await CabinsDao.getAllCabins()
      console.log('Cabins retrieved successfully')
      return sendResponse(res, 200, cabins, 'Cabins retrieved successfully')
    } catch (error: any) {
      console.log('Error: get all cabins', error)
      return sendResponse(res, 500, null, error)
    }
  }

  static async getCabin(req: Request, res: Response) {
    const cabinNumber = req.params.cabinNumber

    try {
      const cabin = await CabinsDao.getCabin(cabinNumber)
      if (!cabin) {
        console.error('Error: cabin not found')
        return sendResponse(res, 404, null, 'Cabin not found')
      }

      console.log('Cabin retrieved successfully')
      return sendResponse(res, 200, cabin, 'Cabin retrieved successfully')
    } catch (error: any) {
      console.log('Error: get cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }

  static async deleteCabin(req: Request, res: Response) {
    const cabinNumber = req.params.cabinNumber

    try {
      const cabin = await CabinsDao.deleteCabin(cabinNumber)
      if (!cabin) {
        console.error('Error: cabin not found')
        return sendResponse(res, 404, null, 'Cabin not found')
      }

      console.log('Cabin deleted successfully')
      return sendResponse(res, 200, cabin, 'Cabin deleted successfully')
    } catch (error: any) {
      console.log('Error: delete cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }
}
