import React from 'react'

const Input: React.FC<{
  type: string
  id: string
  disabled?: boolean
}> = ({ type, id, disabled }) => {
  return (
    <input
      className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
      type={type}
      id={id}
      disabled={disabled}
    />
  )
}
export default Input
