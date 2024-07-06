// import TableRow from '../cabins/TableRow.tsx'

// interface BookingRowProps {
//   id: string
//   startDate: Date
//   endDate: Date
//   numNight: number
//   totalPrice: number
//   status: 'CHECKED_IN' | 'CHECKED_OUT' | 'UNCONFIRMED'
//   cabin: {
//     cabinNumber: string
//   }
//   guest: {
//     fullName: string
//     email: string
//   }
// }
import { format, isToday } from 'date-fns'
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers.ts'
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from 'react-icons/hi2'
import Button from '../../ui/Button.tsx'

/**
 {
 "id": "0658addc-0e1e-43a4-993b-9e678306d64c",
 "createdAt": "2024-07-06T12:21:44.575Z",
 "startDate": "2024-09-10T00:00:00.000Z",
 "endDate": "2024-09-15T00:00:00.000Z",
 "numNight": 5,
 "numGuest": 4,
 "cabinPrice": 300,
 "totalPrice": 1500,
 "status": "UNCONFIRMED",
 "hasBreakfast": false,
 "isPaid": false,
 "observation": "Pending confirmation of vacation dates",
 "cabinId": "93af8755-c3c7-4f0d-b45f-90400e5e6232",
 "guestId": "73cb5b57-8913-4a5d-8812-7fc907f5f974"
 }
 */
// const BookingRow: React.FC<BookingRowProps> = () => {
const BookingRow = () => {
  const startDate = new Date('2024-09-10T00:00:00.000Z')
  const endDate = new Date('2024-09-15T00:00:00.000Z')
  const numNight = 5
  const totalPrice = 1500
  const status = 'CHECKED_IN'
  const cabinNumber = '001'
  const fullName = 'husam mahmud'
  const email = 'husam@example'

  const statusToTagName = {
    CHECKED_IN: 'green',
    CHECKED_OUT: 'grey',
    UNCONFIRMED: 'blue',
  }

  const statusColor = statusToTagName[status]

  return (
    <div className="grid grid-cols-[0.6fr_1.5fr_2fr_1.4fr_1fr_0.5fr] items-center px-9 py-5">
      <div className="font-sono text-2xl font-semibold text-color-grey-600">
        {cabinNumber}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-semibold">{fullName}</span>
        <span className="text-xl text-color-grey-600">{email}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-semibold">
          {isToday(startDate) ? 'Today' : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNight} night stay
        </span>

        <span>
          {format(startDate, 'MMM d, yyyy')} &rarr;{' '}
          {format(endDate, 'MMM d, yyyy')}
        </span>
      </div>

      <div
        className={`w-fit rounded-full uppercase bg-${statusColor}-300 px-4 py-2 text-lg font-semibold text-${statusColor}-800`}
      >
        {status.replace('_', ' ')}
      </div>

      <div className="font-sono text-xl font-semibold">
        {formatCurrency(totalPrice)}
      </div>

      <div className="flex gap-3">
        {status === 'UNCONFIRMED' && (
          <Button variant="secondary" size="small">
            <HiArrowDownOnSquare size={20} />
          </Button>
        )}

        {status === 'CHECKED_IN' && (
          <Button variant="secondary" size="small">
            <HiArrowUpOnSquare size={20} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default BookingRow
