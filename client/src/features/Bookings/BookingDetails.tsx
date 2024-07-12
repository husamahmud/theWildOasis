import { useBooking } from './useBooking.ts'

import Row from '../../ui/Row.tsx'
import Tag from '../../ui/Tag.tsx'
import Button from '../../ui/Button.tsx'
import Spinner from '../../ui/Spinner.tsx'
import BookingDataBox from './BookingDataBox.tsx'

const BookingDetails = () => {
  const { booking, isLoading } = useBooking()

  if (isLoading) return <Spinner />

  return (
    <>
      <Row type="horizontal">
        <div className="flex items-center gap-10">
          <h1>Booking #{booking.id.split('-')[0]}</h1>
          <Tag status={booking.status} />
        </div>

        <button className="rounded-sm border px-5 py-4 text-center font-semibold text-color-brand-600 transition-all">
          &larr; Back
        </button>
      </Row>

      <BookingDataBox {...booking} />

      <div className="flex justify-end gap-5">
        {booking.status === 'CHECKED_IN' && <Button>Check out booking</Button>}
        {booking.status === 'UNCONFIRMED' && <Button>Check in booking</Button>}
        <Button variant="secondary">Delete</Button>
      </div>
    </>
  )
}

export default BookingDetails
