import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

import Button from '../../ui/Button.tsx'
import useRegister from './useRegister.ts'
import SpinnerMini from '../../ui/SpinnerMini.tsx'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { register, isLoading } = useRegister()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !username || !password) {
      return toast.error('Please fill in all fields')
    }

    register({ email, username, password })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-lg bg-white px-8 py-10 shadow-md"
    >
      <h4 className="mb-8 text-center text-2xl font-semibold">Sign up</h4>

      <div className="mb-6">
        <label
          className="mb-2 block text-lg font-semibold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>

        <input
          type="username"
          id="username"
          autoComplete="username"
          className="w-full rounded-md border border-grey-300 bg-grey-0 px-6 py-3 text-xl shadow-sm"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          className="mb-2 block text-lg font-semibold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          autoComplete="username"
          className="w-full rounded-md border border-grey-300 bg-grey-0 px-6 py-3 text-xl shadow-sm"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label
          className="mb-2 block text-lg font-semibold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full rounded-md border border-grey-300 bg-grey-0 px-6 py-3 text-xl shadow-sm"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-6 flex w-fit flex-col">
        <NavLink
          to="/login"
          className="p-0.5 text-base font-light text-brand-600 hover:underline"
        >
          Already have an account?
        </NavLink>
      </div>

      <div className="flex w-full justify-end">
        <Button
          className="flex w-full items-center justify-center font-light"
          type="submit"
          size="medium"
          disabled={isLoading}
        >
          {isLoading ? <SpinnerMini /> : 'Sign up'}
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
