import React from 'react'
import { HiXMark } from 'react-icons/hi2'

import Button from './Button.tsx'

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-16 py-14 shadow-lg">
        <div className="flex w-full justify-end">
          <Button variant="secondary">
            <HiXMark />
          </Button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Modal
