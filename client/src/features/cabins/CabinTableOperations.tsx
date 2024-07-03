import SortBy from '../../ui/SortBy.tsx'
import Filter from '../../ui/Filter.tsx'

const CabinTableOperations = () => {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'cabinNumber-asc', label: 'Sort by name (A-Z)' },
          { value: 'cabinNumber-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' },
        ]}
      />
    </div>
  )
}

export default CabinTableOperations
