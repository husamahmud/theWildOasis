import React from 'react'

const Textarea: React.FC<{
  id: string
  disabled?: boolean
}> = ({ id, disabled }) => {
  return (
    <textarea
      className="h-28 w-[16.5rem] rounded-md border border-grey-300 bg-grey-0 px-5 py-3 shadow-sm"
      defaultValue=""
      id={id}
      disabled={disabled}
    />
  )
}

export default Textarea
