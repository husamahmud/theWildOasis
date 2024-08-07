import React from 'react'
import { format, isToday } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { HiEye } from 'react-icons/hi2'

import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers.ts'

import Button from '../../ui/Button.tsx'
import Tag from '../../ui/Tag.tsx'

interface BookingRowProps {
  booking: {
    id: string
    startDate: string
    endDate: string
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
  }
  guest: {
    id: string
    createdAt: string
    fullName: string
    email: string
    nationalID: string
    nationality: string
    countryFlag: string
  }
  cabin: {
    id: string
    createdAt: string
    cabinNumber: string
    maxCapacity: number
    regularPrice: number
    discount: number
    description: string
    image: string
  }
}

const BookingRow: React.FC<BookingRowProps> = ({ booking, cabin, guest }) => {
  const navigate = useNavigate()
  const { id, startDate, endDate, numNight, totalPrice, status } = booking

  return (
    <div className="grid grid-cols-[0.6fr_1.5fr_2fr_1.4fr_1fr_0.5fr] items-center px-9 py-5">
      <div className="font-sono text-2xl font-semibold text-color-grey-600">
        {cabin.cabinNumber}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-semibold">{guest.fullName}</span>
        <span className="text-xl text-color-grey-600">{guest.email}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-semibold">
          {isToday(startDate)
            ? 'Today'
            : formatDistanceFromNow(new Date(startDate))}{' '}
          &rarr; {numNight} night stay
        </span>

        <span>
          {format(startDate, 'MMM d, yyyy')} &rarr;{' '}
          {format(endDate, 'MMM d, yyyy')}
        </span>
      </div>

      <Tag status={status} />

      <div className="font-sono text-xl font-semibold">
        {formatCurrency(totalPrice)}
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={() => navigate(`/bookings/${id}`)}>
          <HiEye />
        </Button>
      </div>
    </div>
  )
}

export default BookingRow
