import React, { ReactNode } from 'react'

const Table: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      role="table"
      className="overflow-scroll rounded-md border border-grey-200 bg-grey-0 text-lg"
    >
      {children}
    </div>
  )
}

export default Table
