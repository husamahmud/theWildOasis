import { GuestsI } from '../../types/guests.interface'

/**
 * Data Transfer Object (DTO) for guest details.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class GuestsDto implements Partial<GuestsI> {
  fullName: string
  email: string
  nationalID: string
  nationality: string
  countryFlag: string

  /**
   * Constructs a new GuestsDto object.
   * @param {GuestsI} bodyRequest - The guest details to be used for creating the DTO.
   */
  constructor(bodyRequest: GuestsI) {
    this.fullName = bodyRequest.fullName
    this.email = bodyRequest.email
    this.nationalID = bodyRequest.nationalID
    this.nationality = bodyRequest.nationality
    this.countryFlag = bodyRequest.countryFlag
  }
}
