import { BookingsI } from './bookings.interface'

export interface CabinI {
  id: string;
  cabinNumber: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
  bookings?: BookingsI[];
}
