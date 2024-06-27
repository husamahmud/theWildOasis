import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import TableRow from './TableRow.tsx'
import { CABINS } from '../../utils/constants.ts'

const CabinsTable = () => {
  return (
    <Table>
      <TableHeader>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      {CABINS.map(cabin => (
        <TableRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  )
}

export default CabinsTable
