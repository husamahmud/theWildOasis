import { Status } from '@prisma/client'
import { CabinI } from './cabins.interface'
import { GuestsI } from './guests.interface'

export interface BookingsI {
  id: string;
  startDate: Date;
  endDate: Date;
  numNight: number;
  numGuest: number;
  cabinPrice: number;
  totalPrice: number;
  status: Status;
  hasBreakfast: boolean;
  isPaid: boolean;
  observation: string;
  guest: GuestsI
  cabin: CabinI
}
