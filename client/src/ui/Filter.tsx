import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface FilterProps {
  options: { value: string; label: string }[]
  filterField: string
}

const Filter: React.FC<FilterProps> = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentFilter = searchParams.get(filterField) || options[0].value

  const handleOptionClick = (value: string) => {
    searchParams.set(filterField, value)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex gap-2 rounded-sm border border-grey-100 bg-grey-0 p-2 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          className={`${currentFilter === option.value ? 'bg-color-brand-600 text-brand-50' : 'bg-brand-500'} rounded-sm border-0 bg-grey-0 px-3 py-2 text-2xl font-medium transition-all`}
          onClick={() => handleOptionClick(option.value)}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default Filter
