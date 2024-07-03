import React from 'react'

const Empty: React.FC<{ resourceName: string }> = ({ resourceName }) => {
  return (
    <p className="py-10 text-center text-4xl font-semibold text-color-grey-800">
      No {resourceName} found!
    </p>
  )
}

export default Empty
