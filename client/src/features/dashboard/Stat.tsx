import React from 'react'

interface StatI {
  colors: string
  icon: React.ReactNode
  title: string
  value: number | string
}

export default function Stat({ colors, icon, title, value }: StatI) {
  return (
    <div className="flex items-center justify-between rounded-md bg-grey-0 p-8 px-10 text-grey-500">
      <div
        className={`col-span-full flex aspect-square items-center justify-center rounded-full p-5 ${colors}`}
      >
        {icon}
      </div>

      <div>
        <h5 className="text-lg font-semibold uppercase tracking-wider">
          {title}
        </h5>
        <h3 className="text-2xl font-medium">{value}</h3>
      </div>
    </div>
  )
}
