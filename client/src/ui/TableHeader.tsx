import React, { ReactNode } from 'react'

interface TableHeaderProps {
  children: ReactNode
  columns: string
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, columns }) => {
  return (
    <div
      className={`grid-cols-${columns} grid items-center gap-x-6 border-b border-gray-300 bg-gray-100 px-6 py-4 font-semibold uppercase tracking-wide text-gray-600`}
      role="row"
    >
      {children}
    </div>
  )
}
export default TableHeader
