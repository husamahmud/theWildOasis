import { useQuery } from '@tanstack/react-query'

import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import TableRow from './TableRow.tsx'
import Spinner from '../../ui/Spinner.tsx'

import { getAllCabins } from '../../services/cabins.api.ts'
import { CabinI } from '../../types/cabins.interface.ts'

const CabinsTable = () => {
  const { isLoading, data: { data: cabins } = {} } = useQuery({
    queryKey: ['cabins'],
    queryFn: getAllCabins,
  })

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

      {isLoading ? (
        <Spinner />
      ) : (
        cabins.map((cabin: CabinI) => <TableRow cabin={cabin} key={cabin.id} />)
      )}
    </Table>
  )
}

export default CabinsTable
