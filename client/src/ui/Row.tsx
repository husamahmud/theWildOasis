import React from 'react'

type RowProps = {
  type?: 'horizontal' | 'vertical'
  children: React.ReactNode
}

const Row: React.FC<RowProps> = ({ type = 'vertical', children }) => {
  return (
    <div className={`flex ${
      type === 'horizontal'
        ? 'justify-between items-center'
        : 'flex-col gap-4'}`}
    >
      {children}
    </div>
  )
}

export default Row
