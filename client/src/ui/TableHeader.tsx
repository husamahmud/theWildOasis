import React, { ReactNode } from 'react'

const TableHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 border-b border-gray-300 bg-gray-100 px-6 py-4 font-semibold uppercase tracking-wide text-gray-600"
      role="row"
    >
      {children}
    </div>
  )
}

export default TableHeader
