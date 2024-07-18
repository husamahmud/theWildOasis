import React, { useState } from 'react'

import FormRow from '../../ui/FormRow.tsx'
import Button from '../../ui/Button.tsx'
import useUser from './useUser.ts'
import Spinner from '../../ui/Spinner.tsx'
import useUpdateUser from './useUpdateUser.ts'

const UpdateUserDataForm = () => {
  const { user, isLoading } = useUser()
  const { updateUser, isUpdating } = useUpdateUser()

  const [email, setEmail] = useState(user?.email ?? '')
  const [fullname, setFullname] = useState(user?.fullname ?? '')
  const [avatar, setAvatar] = useState(user?.avatar ?? '')
  const [username, setUsername] = useState(user?.username ?? '')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const changedData: Partial<typeof user> = {
      id: user?.id,
    }

    if (email !== user?.email) changedData.email = email
    if (fullname !== user?.fullname) changedData.fullname = fullname
    if (avatar !== '') changedData.avatar = avatar
    if (username !== user?.username) changedData.username = username

    if (Object.keys(changedData).length > 0) {
      updateUser(changedData)
    } else {
      console.log('No changes to update')
    }
  }

  if (isLoading) return <Spinner />

  return (
    <form
      className="mx-auto w-full rounded-lg bg-grey-0 px-16 py-10 shadow-md"
      onSubmit={handleSubmit}
    >
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="email">
          Email address
        </label>

        <input
          type="text"
          id="email"
          disabled={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="username">
          Username
        </label>

        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="fullname">
          Full name
        </label>

        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="avatar">
          Avatar image
        </label>

        <input
          type="text"
          id="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow hasButton={true}>
        <Button variant="primary" disabled={isUpdating}>
          Update
        </Button>
      </FormRow>
    </form>
  )
}

export default UpdateUserDataForm
