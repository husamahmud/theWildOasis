import { CabinI } from './cabins.interface'
import { GuestsI } from './guests.interface'

export interface BookingI {
  id: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  numNight: number;
  numGuest: number;
  cabinPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observation: string;
  cabinId: string;
  guestId: string;
  guest: GuestsI;
  cabin: CabinI;
}
