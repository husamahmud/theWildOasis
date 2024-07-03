import { useSearchParams } from 'react-router-dom'

import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import TableRow from './TableRow.tsx'
import Spinner from '../../ui/Spinner.tsx'
import Empty from '../../ui/Empty.tsx'

import { CabinI } from '../../types/cabins.interface.ts'
import { useCabins } from './useCabins.ts'

type SortedFiled = 'cabinNumber' | 'regularPrice' | 'maxCapacity' | 'discount'
type SortDirection = 'asc' | 'desc'

const CabinsTable = () => {
  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />
  if (!cabins.length) return <Empty resourceName="cabins" />

  // Filter
  const discount = searchParams.get('discount')
  const filteredCabins = cabins.filter((cabin: CabinI) => {
    if (discount === 'no-discount') return cabin.discount === 0
    if (discount === 'with-discount') return cabin.discount > 0
    return true
  })

  // Sort
  const sortBy = searchParams.get('sortBy') || 'cabinNumber-asc'
  const [field, direction] = sortBy.split('-') as [SortedFiled, SortDirection]
  const modifier = direction === 'asc' ? 1 : -1

  const sortedCabins = filteredCabins.sort(
    (a: CabinI, b: CabinI) => (a[field] - b[field]) * modifier,
  )

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

      {sortedCabins.map((cabin: CabinI) => (
        <TableRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  )
}

export default CabinsTable
