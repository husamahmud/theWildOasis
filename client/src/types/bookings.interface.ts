import { CabinI } from './cabins.interface.ts'
import { GuestI } from './guests.interface.ts'

export interface BookingsI {
  id: string
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
  guestId: string
  cabinId: string
  guest: GuestI
  cabin: CabinI
}
