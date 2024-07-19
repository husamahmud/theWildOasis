import { BookingsI } from '../../types/bookings.interface.ts'
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface SalesChartI {
  bookings: BookingsI[]
  numDays: number
}

export default function SalesChart({ bookings, numDays }: SalesChartI) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  })

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.startDate)))
        .reduce((acc, booking) => acc + booking.totalPrice, 0),
    }
  })

  return (
    <div className="col-span-full flex flex-col justify-between space-y-3 bg-grey-0 px-5 py-9">
      <h2 className="font-semibold">
        Sales from {format(allDates[0], 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates[allDates.length - 1], 'MMM dd yyyy')}
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: '#374151' }}
            tickLine={{ stroke: '#374151' }}
          />
          <YAxis
            unit="$"
            tick={{ fill: '#374151' }}
            tickLine={{ stroke: '#374151' }}
          />
          <Tooltip contentStyle={{ backgroundColor: '#fff' }} />
          <CartesianGrid strokeDasharray="4" />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="#4f46e5"
            fill="#c7d2fe"
            strokeWidth="2"
            name="Total Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
