export interface SettingsI {
  id?: string
  createdAt?: Date
  minBookingLen: number
  maxBookingLen: number
  maxGuests: number
  breakfastCost: number
}
