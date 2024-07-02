import React from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi2'

import { formatCurrency } from '../../utils/helpers.ts'
import { CabinI } from '../../types/cabins.interface.ts'
import Button from '../../ui/Button.tsx'

const TableRow: React.FC<{ cabin: CabinI; key: string }> = ({ cabin }) => {
  const { cabinNumber, maxCapacity, regularPrice, discount, image } = cabin

  return (
    <div
      role="row"
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 px-9 py-5 text-2xl">
      <img
        src={image}
        alt="cabin image"
        className="block aspect-[3/2] w-28 object-cover object-center"
      />
      <div className="font-semibold text-color-grey-600">{cabinNumber}</div>
      <div>
        Fits up to <span className="font-semibold">{maxCapacity}</span> guests
      </div>
      <div className="font-semibold">{formatCurrency(regularPrice)}</div>
      {discount ? (
        <div className="font-semibold text-green-700">
          {formatCurrency(discount)}
        </div>
      ) : (
        <span>&mdash;</span>
      )}

      <div className="flex gap-3">
        <Button variant="secondary">
          <HiPencil />
        </Button>
        <Button variant="primary">
          <HiTrash />
        </Button>
      </div>
    </div>
  )
}

export default TableRow
