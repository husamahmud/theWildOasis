import { useQuery, useQueryClient } from '@tanstack/react-query'

import { UserI } from '../../types/auth.interface.ts'
import { getUser } from '../../services/auth.api.ts'

export default function useUser() {
  const queryClient = useQueryClient()
  const user: UserI = queryClient.getQueryData(['user'])!

  const { data, isPending } = useQuery<UserI>({
    queryKey: ['user'],
    queryFn: () => getUser(user!.id),
  })

  return { user: data, isLoading: isPending }
}
