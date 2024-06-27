import React from 'react'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'

import { formatCurrency } from '../../utils/helpers.ts'
import { CabinI } from '../../types/cabins.interface.ts'

const TableRow: React.FC<{ cabin: CabinI; key: string }> = ({ cabin }) => {
  const { cabinNumber, maxCapacity, regularPrice, discount, image } = cabin

  return (
    <div
      role="row"
      className="font-sons grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 px-9 py-5 text-2xl"
    >
      <Img image={image} />
      <Cabin cabinNumber={cabinNumber} />
      <Guests maxCapacity={maxCapacity} />
      <Price regularPrice={regularPrice} />
      {discount ? <Discount discount={discount} /> : <span>&mdash;</span>}
      <div className="">
        <HiSquare2Stack />
        <HiPencil />
        <HiTrash />
      </div>
    </div>
  )
}

export default TableRow

const Img: React.FC<{ image: string }> = ({ image }) => {
  return (
    <img
      src={image}
      alt="cabin image"
      className="block aspect-[3/2] w-28 object-cover object-center"
    />
  )
}

const Cabin: React.FC<{ cabinNumber: string }> = ({ cabinNumber }) => {
  return <div className="font-semibold text-color-grey-600">{cabinNumber}</div>
}

const Guests: React.FC<{ maxCapacity: number }> = ({ maxCapacity }) => {
  return (
    <div>
      Fits up to <span className="font-semibold">{maxCapacity}</span> guests
    </div>
  )
}

const Price: React.FC<{ regularPrice: number }> = ({ regularPrice }) => {
  return <div className="font-semibold">{formatCurrency(regularPrice)}</div>
}

const Discount: React.FC<{ discount: number }> = ({ discount }) => {
  return (
    <div className="font-semibold text-green-700">
      {formatCurrency(discount)}
    </div>
  )
}
