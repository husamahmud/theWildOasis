import { BookingsI } from '../../types/bookings.interface'
import { GuestsI } from '../../types/guests.interface'
import { CabinI } from '../../types/cabins.interface'

/**
 * Data Transfer Object (DTO) for bookings details.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class BookingsDto implements Partial<BookingsI> {
  startDate: Date
  endDate: Date
  numNight: number
  numGuest: number
  cabinPrice: number
  totalPrice: number
  status: 'CHECKED_IN' | 'CHECKED_OUT' | 'UNCONFIRMED'
  hasBreakfast: boolean
  isPaid: boolean
  observation: string
  guest: GuestsI
  cabin: CabinI

  constructor(bodyRequest: BookingsI) {
    this.startDate = bodyRequest.startDate
    this.endDate = bodyRequest.endDate
    this.numNight = bodyRequest.numNight
    this.numGuest = bodyRequest.numGuest
    this.cabinPrice = bodyRequest.cabinPrice
    this.totalPrice = bodyRequest.totalPrice
    this.status = bodyRequest.status
    this.hasBreakfast = bodyRequest.hasBreakfast
    this.isPaid = bodyRequest.isPaid
    this.observation = bodyRequest.observation
    this.guest = bodyRequest.guest ?? {} as GuestsI
    this.cabin = bodyRequest.cabin ?? {} as CabinI
  }
}
