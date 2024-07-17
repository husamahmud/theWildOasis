import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from '../features/auth/useUser.ts'

import Spinner from './Spinner.tsx'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const navigate = useNavigate()
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (!user?.id) navigate('/login')
  }, [navigate, user])

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return children
}
