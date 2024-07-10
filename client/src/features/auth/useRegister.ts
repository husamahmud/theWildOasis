import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { register as registerAPI } from '../../services/auth.api.ts'

export default function useRegister() {
  const navigate = useNavigate()

  const { mutate: register, isPending: isLoading } = useMutation({
    mutationFn: registerAPI,
    onSuccess: (data) => {
      toast.success('Registered successfully!')
      console.log('Registered successfully!', data)
      navigate('/login', { replace: true })
    },
    onError: (err) => toast.error(err.message),
  })

  return { register, isLoading }
}
