import { CabinI } from '../../types/cabins.interface'
import { BookingI } from '../../types/booking.interface'

export class CabinsDto implements Partial<CabinI> {
  cabinNumber: string
  maxCapacity: number
  regularPrice: number
  discount: number
  description: string
  image: string
  bookings?: BookingI[]

  constructor(bodyRequest: CabinI) {
    this.cabinNumber = bodyRequest.cabinNumber
    this.maxCapacity = bodyRequest.maxCapacity
    this.regularPrice = bodyRequest.regularPrice
    this.discount = bodyRequest.discount
    this.description = bodyRequest.description
    this.image = bodyRequest.image
    this.bookings = bodyRequest.booking
  }
}
