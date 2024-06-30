import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import TableRow from './TableRow.tsx'
import Spinner from '../../ui/Spinner.tsx'

import { CabinI } from '../../types/cabins.interface.ts'
import { useCabins } from './useCabins.ts'

const CabinsTable = () => {
  const { isLoading, cabins, error } = useCabins()

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

      {isLoading && !error ? (
        <Spinner />
      ) : (
        cabins.map((cabin: CabinI) => <TableRow cabin={cabin} key={cabin.id} />)
      )}
    </Table>
  )
}

export default CabinsTable
