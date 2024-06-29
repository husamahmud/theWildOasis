import React from 'react'

const FormRow: React.FC<{
  children: React.ReactNode
  hasButton?: true
}> = ({ children, hasButton }) => {
  return (
    <div
      className={`items-center border-b border-b-grey-100 px-0 py-5 last:border-0 ${hasButton ? 'flex justify-end gap-5' : 'grid grid-cols-[24rem_1fr_1.2fr]'}`}>
      {children}
    </div>
  )
}

export default FormRow
