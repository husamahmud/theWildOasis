import React from 'react'
import {
  HiOutlineChatBubbleBottomCenter,
  HiOutlineHomeModern,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi2'
import { format, isToday } from 'date-fns'

import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers.ts'
import { BookingsI } from '../../types/bookings.interface.ts'

import Flag from '../../ui/Flag.tsx'
import DataItem from '../../ui/DataItem.tsx'

const BookingDataBox: React.FC<BookingsI> = (booking) => {
  return (
    <div className="overflow-hidden rounded-md border border-grey-100 bg-grey-0">
      <header className="flex items-center justify-between bg-brand-500 px-8 py-16 text-xl font-medium text-[#e0e7ff]">
        <div className="flex items-center gap-7 text-2xl font-semibold">
          <HiOutlineHomeModern size={40} />
          <p>
            {booking.numNight} nights in Cabin{' '}
            <span className="ml-2 font-sono text-3xl">
              {booking.cabin.cabinNumber}
            </span>
          </p>
        </div>

        <p>
          {format(new Date(booking.startDate), 'EEE, MMM dd yyyy')}{' '}
          {isToday(new Date(booking.startDate))
            ? '(Today)'
            : formatDistanceFromNow(new Date(booking.startDate))}{' '}
          &mdash; {format(new Date(booking.endDate), 'EEE, MMM dd yyyy')}{' '}
        </p>
      </header>

      <section className="py-16 pl-14 pr-5">
        <div className="mb-6 flex items-center gap-5 text-color-grey-600">
          {booking.guest.countryFlag && (
            <Flag
              src={booking.guest.countryFlag}
              alt={`flag of ${booking.guest.nationality}`}
            />
          )}
          <p className="font-semibold">
            {booking.guest.fullName}{' '}
            {booking.numGuest > 1 ? `+ ${booking.numGuest - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p>{booking.guest.email}</p>
          <span>&bull;</span>
          <p>National ID {booking.guest.nationalID}</p>
        </div>

        {booking.observation && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenter />}
            label="Observations"
          >
            {booking.observation}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included">
          {booking.hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <div
          className={`mt-10 flex items-center justify-between rounded-sm border px-10 py-14 ${booking.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-700 text-yellow-100'}`}
        >
          <DataItem
            icon={
              <HiOutlineCurrencyDollar
                color={
                  booking.isPaid
                    ? 'bg-green-700 text-green-100'
                    : 'bg-yellow-700 text-yellow-100'
                }
              />
            }
            label="Total Price"
          >
            {formatCurrency(booking.totalPrice)}
          </DataItem>

          <p className="text-3x font-medium uppercase">
            {booking.isPaid ? 'Paid' : 'Will pay at property'}
          </p>
        </div>
      </section>

      <footer className="px-6 py-10 text-right text-xl text-color-grey-600">
        <p>
          Booked {format(new Date(booking.createdAt), 'EEE, MMM dd yyyy, p')}
        </p>
      </footer>
    </div>
  )
}

export default BookingDataBox
