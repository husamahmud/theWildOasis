import { useQuery } from '@tanstack/react-query'
import { getAllSettings } from '../../services/settings.api.ts'

export default function useSettings() {
  const {
    isLoading,
    data: { data: settings } = {},
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getAllSettings,
  })

  return { isLoading, settings, error }
}
