import { SettingsI } from '../../types/settings.interface'

/**
 * Data Transfer Object (DTO) for settings details.
 * This class is used to transfer data between layers and ensure the data integrity.
 */
export class SettingsDto implements Partial<SettingsI> {
  id?: string
  minBookingLen: number
  maxBookingLen: number
  maxGuests: number
  breakfastCost: number

  /**
   * Constructs a new SettingsDto object.
   * @param {SettingsI} bodyRequest - The settings details to be used for creating the DTO.
   */
  constructor(bodyRequest: SettingsI) {
    this.minBookingLen = bodyRequest.minBookingLen
    this.maxBookingLen = bodyRequest.maxBookingLen
    this.maxGuests = bodyRequest.maxGuests
    this.breakfastCost = bodyRequest.breakfastCost
  }
}
