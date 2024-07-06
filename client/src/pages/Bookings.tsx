import Row from '../ui/Row.tsx'
import BookingsTable from '../features/Bookings/BookingsTable.tsx'

export default function Bookings() {
  return (
    <>
      <Row>
        <h1>All bookings</h1>
      </Row>

      <BookingsTable />
    </>
  )
}
