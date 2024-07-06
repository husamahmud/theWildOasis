import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import BookingRow from './BookingRow.tsx'

const BookingsTable = () => {
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

      <BookingRow />
    </Table>
  )
}

export default BookingsTable
