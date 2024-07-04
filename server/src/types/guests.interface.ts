import { BookingsI } from './bookings.interface'

export interface GuestsI {
  id: string;
  createdAt: Date;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
  booking?: BookingsI[];
}
