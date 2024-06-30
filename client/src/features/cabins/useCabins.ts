import { useQuery } from '@tanstack/react-query'

import { getAllCabins } from '../../services/cabins.api.ts'

export function useCabins() {
  const {
    isLoading,
    data: { data: cabins } = {},
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getAllCabins,
  })

  return { isLoading, cabins, error }
}
