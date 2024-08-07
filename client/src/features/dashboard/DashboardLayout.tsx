import Stats from './Stats.tsx'
import { useCabins } from '../cabins/useCabins.ts'
import Spinner from '../../ui/Spinner.tsx'
import { useRecentBookings } from './useRecentBookings.ts'
import SalesChart from './SalesChart.tsx'

export default function DashboardLayout() {
  const { cabins, isLoading: isLoadingCabins } = useCabins()
  const { bookings, isLoadingRecentBookings, confirmedStays, numDays } =
    useRecentBookings()

  if (isLoadingCabins || isLoadingRecentBookings) return <Spinner />

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_34rem_1fr] gap-10">
      <Stats
        cabinsCount={cabins.length}
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
      />

      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  )
}
