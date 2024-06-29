import React from 'react'

const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <form className="w-[60rem] overflow-hidden rounded-md border border-grey-100 bg-grey-0 px-16 py-10 text-xl">
      {children}
    </form>
  )
}

export default Form
