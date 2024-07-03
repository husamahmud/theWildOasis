import React from 'react'

interface SelectProps {
  options: { value: string; label: string }[]
  value: string
  type?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  type,
  ...props
}) => {
  return (
    <select
      className={`border ${type === 'white' ? 'border-grey-100' : 'border-grey-300'} rounded-sm bg-grey-0 px-5 py-3 text-2xl font-medium shadow-sm`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
