import { Request, Response } from 'express'

import prisma from '../models/prisma/prisma-client'
import sendResponse from '../utils/sendRequest'

import { CabinsDto } from '../models/dto/cabins.dto'
import { CabinsValidations } from '../middlewares/cabins.validations'
import { CabinsDao } from '../models/dao/cabins.dao'

/**
 * Controller class for handling cabin-related operations.
 */
export class CabinsController {
  /**
   * Handles the creation of a new cabin.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async createCabin(req: Request, res: Response) {
    const cabinDto = new CabinsDto(req.body)
    const { bookings, ...cabinData } = cabinDto

    // Validate cabin data
    const { error } = await CabinsValidations.createCabin(cabinData)
    if (error) {
      console.error('Error: cabin validation', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the cabin already exists
      const cabinNumber = cabinData.cabinNumber
      const existingCabin = await prisma.cabins.findUnique({
        where: { cabinNumber },
      })
      if (existingCabin) {
        console.error('Error: cabin already exists')
        return sendResponse(res, 400, null, 'Cabin already exists')
      }

      // Create the cabin
      const cabin = await CabinsDao.createCabin(cabinData)
      console.log('Cabin created successfully')
      return sendResponse(res, 201, cabin, 'Cabin created successfully')
    } catch (error: any) {
      console.log('Error: create cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the updating of an existing cabin.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async updateCabin(req: Request, res: Response) {
    const cabinDto = new CabinsDto(req.body)
    const id = req.params.id
    const { bookings, ...cabinData } = cabinDto

    // Validate cabin data
    const { error } = await CabinsValidations.updateCabin(cabinData)
    if (error) {
      console.error('Error: cabin validation', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the cabin exists
      const existingCabin = await prisma.cabins.findUnique({
        where: { id },
      })
      if (!existingCabin) {
        console.error('Error: cabin not found')
        return sendResponse(res, 404, null, 'Cabin not found')
      }

      // Update the cabin
      const cabin = await CabinsDao.updateCabin(id, cabinData)
      console.log('Cabin updated successfully')
      return sendResponse(res, 200, cabin, 'Cabin updated successfully')
    } catch (error: any) {
      console.log('Error: update cabin', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Retrieves all cabins from the database.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
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

  /**
   * Retrieves a specific cabin by its id.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async getCabin(req: Request, res: Response) {
    const id = req.params.id

    try {
      const cabin = await CabinsDao.getCabin(id)
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

  /**
   * Deletes a specific cabin by its cabin number.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async deleteCabin(req: Request, res: Response) {
    const id = req.params.id

    try {
      const cabin = await CabinsDao.deleteCabin(id)
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
