import { CabinI } from './cabins.interface'
import { GuestI } from './guest.interface'

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
  guest: GuestI;
  cabin: CabinI;
}
