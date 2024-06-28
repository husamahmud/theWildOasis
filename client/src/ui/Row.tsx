import React from 'react'

type RowProps = {
  type?: 'horizontal' | 'vertical'
  children: React.ReactNode
  classNames?: string
}

const Row: React.FC<RowProps> = ({
  type = 'vertical',
  children,
  classNames,
}) => {
  return (
    <div
      className={`flex ${
        type === 'horizontal'
          ? 'items-center justify-between'
          : 'flex-col gap-4'
      } ${classNames}`}>
      {children}
    </div>
  )
}

export default Row
