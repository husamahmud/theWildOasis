import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2'

import Stat from './Stat.tsx'
import { BookingsI } from '../../types/bookings.interface.ts'
import { formatCurrency } from '../../utils/helpers.ts'

interface StatsI {
  cabinsCount: number
  bookings: BookingsI[]
  confirmedStays: BookingsI[]
  numDays: number
}

export default function Stats({
  cabinsCount,
  bookings,
  confirmedStays,
  numDays,
}: StatsI) {
  const numBookings = bookings.length
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  const checkIns = confirmedStays.length
  const occupancyRate =
    (confirmedStays.reduce((acc, cur) => acc + cur.numNight, 0) /
      cabinsCount /
      numDays) *
    100

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        colors="text-blue-700 bg-blue-100"
        icon={<HiOutlineBriefcase size={30} />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        colors="text-green-700 bg-green-100"
        icon={<HiOutlineBanknotes size={30} />}
      />
      <Stat
        title="Check ins"
        value={checkIns}
        colors="text-yellow-700 bg-yellow-100"
        icon={<HiOutlineCalendarDays size={30} />}
      />
      <Stat
        title="Occupancy rate"
        value={occupancyRate.toFixed(2) + '%'}
        colors="text-indigo-700 bg-indigo-100"
        icon={<HiOutlineChartBar size={30} />}
      />
    </>
  )
}
