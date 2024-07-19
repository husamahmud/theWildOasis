import React, { useState } from 'react'

import useUser from './useUser.ts'
import useUpdateUser from './useUpdateUser.ts'

import FormRow from '../../ui/FormRow.tsx'
import Spinner from '../../ui/Spinner.tsx'
import Button from '../../ui/Button.tsx'
import toast from 'react-hot-toast'

const UpdateUserPassword = () => {
  const { user, isLoading } = useUser()
  const { updateUser, isUpdating } = useUpdateUser()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) return

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return
    }

    if (password === '' || confirmPassword === '') {
      toast.error('Password cannot be empty')
      return
    }

    updateUser({
      ...user,
      password: password,
    })
  }

  if (isLoading) return <Spinner />

  return (
    <form
      className="mx-auto w-full rounded-lg bg-grey-0 px-16 py-10 shadow-md"
      onSubmit={handleSubmit}
    >
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="password">
          New password
        </label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="confirm-password">
          Confirm new password
        </label>

        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow hasButton={true}>
        <Button variant="primary" disabled={isUpdating}>
          Update password
        </Button>
      </FormRow>
    </form>
  )
}

export default UpdateUserPassword
