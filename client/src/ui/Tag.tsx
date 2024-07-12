import React from 'react'

interface TagProps {
  status: string
}

const statusColor = {
  UNCONFIRMED: `bg-blue-100 text-blue-700`,
  CHECKED_IN: `bg-green-100 text-green-700`,
  CHECKED_OUT: `bg-gray-100 text-gray-700`,
}

const Tag: React.FC<TagProps> = ({ status }) => {
  const statusClass = statusColor[status as keyof typeof statusColor]

  return (
    <div
      className={`${statusClass} w-fit rounded-full px-4 py-2 text-lg font-semibold uppercase`}
    >
      {status.replace('_', ' ')}
    </div>
  )
}

export default Tag
