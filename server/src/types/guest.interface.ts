import { BookingI } from './booking.interface'

export interface GuestI {
  id: string;
  createdAt: Date;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
  bookings?: BookingI[];
}
