import Select from './Select.tsx'
import { useSearchParams } from 'react-router-dom'
import React from 'react'

interface SortByProps {
  options: { value: string; label: string }[]
}

const SortBy: React.FC<SortByProps> = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const value = searchParams.get('sortBy') || 'name-asc'

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={value}
      type="white"
    />
  )
}

export default SortBy
