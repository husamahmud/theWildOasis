import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { updateSettings as UpdateSettingAPI } from '../../services/settings.api.ts'

export default function useUpdateSettings() {
  const queryClient = useQueryClient()

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: UpdateSettingAPI,
    onSuccess: () => {
      toast.success('Settings updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: (error) => {
      toast.error('Failed to update settings' || error.message)
    },
  })

  return { updateSetting, isUpdating }
}
