import React from 'react'

interface DataItemProps {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}

const DataItem: React.FC<DataItemProps> = ({ label, icon, children }) => {
  return (
    <div className="flex items-center gap-6 px-3">
      <span className="flex items-center gap-3.5 font-medium">
        <span className="h-8 w-8">{icon}</span>
        <span>{label}</span>
      </span>

      {children}
    </div>
  )
}

export default DataItem
