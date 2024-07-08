import { useSearchParams } from 'react-router-dom'

import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import BookingRow from './BookingRow.tsx'
import Spinner from '../../ui/Spinner.tsx'
import Empty from '../../ui/Empty.tsx'

import { useBookings } from './useBookings.ts'
import { BookingsI } from '../../types/bookings.interface.ts'

type SortedFiled = 'startDate' | 'totalPrice'
type SortDirection = 'asc' | 'desc'

const BookingsTable = () => {
  const { bookings, isLoading } = useBookings()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />
  if (!bookings.length) return <Empty resourceName="bookings" />

  // Filter
  const status = searchParams.get('status') || 'all'
  const filteredBookings = bookings.filter((booking: BookingsI) => {
    if (status === 'checked-out') return booking.status === 'CHECKED_OUT'
    if (status === 'checked-in') return booking.status === 'CHECKED_IN'
    if (status === 'unconfirmed') return booking.status === 'UNCONFIRMED'
    return true
  })

  // Sort
  const sortBy = searchParams.get('sortBy') || 'startDate-desc'
  const [field, direction] = sortBy.split('-') as [SortedFiled, SortDirection]
  const modifier = direction === 'asc' ? 1 : -1
  const sortedBookings = filteredBookings.sort((a: BookingsI, b: BookingsI) => {
    if (field === 'startDate') {
      return (
        (new Date(a.startDate).getTime() - new Date(b.startDate).getTime()) *
        modifier
      )
    }
    return (+a.totalPrice - +b.totalPrice) * modifier
  })

  return (
    <Table>
      <TableHeader columns="[0.6fr_1.5fr_2fr_1.4fr_1fr_0.5fr]">
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </TableHeader>

      {sortedBookings.map((booking: BookingsI) => (
        <BookingRow
          key={booking.id}
          booking={booking}
          guest={booking.guest}
          cabin={booking.cabin}
        />
      ))}
    </Table>
  )
}

export default BookingsTable
