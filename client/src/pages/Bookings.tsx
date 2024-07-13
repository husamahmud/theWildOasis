import Row from '../ui/Row.tsx'
import BookingsTable from '../features/Bookings/BookingsTable.tsx'
import BookingsTableOperations from '../features/Bookings/BookingsTableOperations.tsx'

export default function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <h1>Bookings</h1>
        <BookingsTableOperations />
      </Row>

      <BookingsTable />
    </>
  )
}
