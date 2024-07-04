import { Status } from '@prisma/client'

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
  guestId: string;
  cabinId: string;
}
