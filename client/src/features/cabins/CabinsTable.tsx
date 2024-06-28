import { useQuery } from '@tanstack/react-query'

import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import TableRow from './TableRow.tsx'
import Spinner from '../../ui/Spinner.tsx'

import { getAllCabins } from '../../services/cabins.api.ts'
import { CABINS } from '../../utils/constants.ts'

const CabinsTable = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['cabins'],
    queryFn: getAllCabins,
  })

  console.log(data?.data)

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
        CABINS.map(cabin => <TableRow cabin={cabin} key={cabin.id} />)
      )}
    </Table>
  )
}

export default CabinsTable
