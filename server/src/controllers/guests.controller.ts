import { Request, Response } from 'express'

import sendResponse from '../utils/sendRequest'
import { GuestsDto } from '../models/dto/guests.dto'
import { GuestsValidations } from '../middlewares/guests.validations'
import { GuestsDao } from '../models/dao/guests.dao'

export class GuestsController {
  /**
   * Handles the creation of a new guest.
   */
  static async createGuest(req: Request, res: Response) {
    const guestDto = new GuestsDto(req.body)
    const { bookings, ...guestData } = guestDto

    // Validate guest data
    const { error } = await GuestsValidations.createGuest(guestData)
    if (error) {
      console.error('Error: guest validation', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the guest already exists
      const guestEmailExists = await GuestsDao.getGuestByEmail(guestData.email)
      const guestNationalIDExists = await GuestsDao.getGuestByNationalID(guestData.nationalID)
      if (guestEmailExists || guestNationalIDExists) {
        console.error('Error: guest already exists')
        return sendResponse(res, 400, null, 'Guest already exists')
      }

      // Create the guest
      const newGuest = await GuestsDao.createGuest(guestData)
      console.log('Guest created successfully')
      return sendResponse(res, 201, newGuest, 'Guest created successfully')
    } catch (error: any) {
      console.log('Error: create guest', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the updating of an existing guest.
   **/
  static async updateGuest(req: Request, res: Response) {
    const guestDto = new GuestsDto(req.body)
    const id = req.params.id
    const { bookings, ...guestData } = guestDto

    // Validate guest data
    const { error } = await GuestsValidations.updateGuest(guestData)
    if (error) {
      console.error('Error: guest validation', error)
      return sendResponse(res, 400, null, error)
    }

    try {
      // Check if the guest exists
      const existingGuest = await GuestsDao.getGuest(id)
      if (!existingGuest) {
        console.error('Error: guest not found')
        return sendResponse(res, 404, null, 'Guest not found')
      }

      // Check if the guest's email or national ID already exists
      const guestEmailExists = await GuestsDao.getGuestByEmail(guestData.email)
      if (guestEmailExists && guestEmailExists.id !== id) {
        console.error('Error: guest email already exists')
        return sendResponse(res, 400, null, 'Guest email already exists')
      }
      const guestNationalIDExists = await GuestsDao.getGuestByNationalID(guestData.nationalID)
      if (guestNationalIDExists && guestNationalIDExists.id !== id) {
        console.error('Error: guest national ID already exists')
        return sendResponse(res, 400, null, 'Guest national ID already exists')
      }

      // Update the guest
      const updatedGuest = await GuestsDao.updateGuest(id, guestData)
      console.log('Guest updated successfully')
      return sendResponse(res, 200, updatedGuest, 'Guest updated successfully')
    } catch (error: any) {
      console.log('Error: update guest', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Retrieves all guests from the database.
   **/
  static async getAllGuests(req: Request, res: Response) {
    try {
      const guests = await GuestsDao.getAllGuests()
      console.log('Guests retrieved successfully')
      return sendResponse(res, 200, guests, 'Guests retrieved successfully')
    } catch (error: any) {
      console.log('Error: get all guests', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Retrieves a specific guest by their id.
   **/
  static async getGuest(req: Request, res: Response) {
    const id = req.params.id

    try {
      const guest = await GuestsDao.getGuest(id)
      if (!guest) {
        console.error('Error: guest not found')
        return sendResponse(res, 404, null, 'Guest not found')
      }

      console.log('Guest retrieved successfully')
      return sendResponse(res, 200, guest, 'Guest retrieved successfully')
    } catch (error: any) {
      console.log('Error: get guest', error)
      return sendResponse(res, 500, null, error)
    }
  }

  /**
   * Handles the deletion of a specific guest.
   **/
  static async deleteGuest(req: Request, res: Response) {
    const id = req.params.id

    try {
      // Check if the guest exists
      const existingGuest = await GuestsDao.getGuest(id)
      if (!existingGuest) {
        console.error('Error: guest not found')
        return sendResponse(res, 404, null, 'Guest not found')
      }

      // Delete the guest
      const deletedGuest = await GuestsDao.deleteGuest(id)
      console.log('Guest deleted successfully')
      return sendResponse(res, 200, deletedGuest, 'Guest deleted successfully')
    } catch (error: any) {
      console.log('Error: delete guest', error)
      return sendResponse(res, 500, null, error)
    }
  }
}
