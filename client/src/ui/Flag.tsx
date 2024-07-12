import React from 'react'

interface FlagProps {
  src: string
  alt: string
}

const Flag: React.FC<FlagProps> = ({ src, alt }) => {
  return (
    <img
      className="block max-w-8 rounded-tiny border border-grey-100"
      src={src}
      alt={alt}
    />
  )
}

export default Flag
