import { CabinI } from '../../types/cabins.interface'

/**
 * Data Transfer Object (DTO) for cabin details.
 * This class is used to transfer data between layers and ensure the data integrity.
 */
export class CabinsDto implements Partial<CabinI> {
  cabinNumber: string
  maxCapacity: number
  regularPrice: number
  discount: number
  description: string
  image: string

  /**
   * Constructs a new CabinsDto object.
   * @param {CabinI} bodyRequest - The cabin details to be used for creating the DTO.
   */
  constructor(bodyRequest: CabinI) {
    this.cabinNumber = bodyRequest.cabinNumber
    this.maxCapacity = bodyRequest.maxCapacity
    this.regularPrice = bodyRequest.regularPrice
    this.discount = bodyRequest.discount
    this.description = bodyRequest.description
    this.image = bodyRequest.image
  }
}
