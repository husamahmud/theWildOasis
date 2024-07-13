import { useNavigate } from 'react-router-dom'

import useBooking from './useBooking.ts'
import useDeleteBooking from './useDeleteBooking.ts'
import useCheckInOut from '../check-in-out/useCheckInOut.ts'

import Row from '../../ui/Row.tsx'
import Tag from '../../ui/Tag.tsx'
import Button from '../../ui/Button.tsx'
import Spinner from '../../ui/Spinner.tsx'
import BookingDataBox from './BookingDataBox.tsx'

const BookingDetails = () => {
  const navigate = useNavigate()

  const { booking, isLoading } = useBooking()
  const { deleteCabin, isDeleting } = useDeleteBooking()
  const { checkInOutBooking, isCheckingInOut } = useCheckInOut()

  if (isLoading) return <Spinner />

  const handleDelete = () => {
    deleteCabin(booking.id)
    navigate('/bookings')
  }

  const handleCheckInOut = () => {
    checkInOutBooking(booking.id)
  }

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
        {booking.status === 'CHECKED_IN' && (
          <Button onClick={handleCheckInOut} disabled={isCheckingInOut}>
            Check out booking
          </Button>
        )}
        {booking.status === 'UNCONFIRMED' && (
          <Button onClick={handleCheckInOut} disabled={isCheckingInOut}>
            Check in booking
          </Button>
        )}
        <Button
          variant="secondary"
          disabled={isDeleting}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </>
  )
}

export default BookingDetails
