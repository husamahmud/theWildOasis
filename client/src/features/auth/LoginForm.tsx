import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../ui/Button.tsx'
import useLogin from './useLogin.ts'
import toast from 'react-hot-toast'
import SpinnerMini from '../../ui/SpinnerMini.tsx'

const LoginForm = () => {
  const [email, setEmail] = useState('husamahmud@gmail.com')
  const [password, setPassword] = useState('123456789')
  const [isRememberMe, setIsRememberMe] = useState(false)
  const { login, isLoading } = useLogin()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !password) return toast.error('Please fill in all fields')

    login({ email, password, isRememberMe })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-lg bg-white px-8 py-10 shadow-md"
    >
      <h4 className="mb-8 text-center text-2xl font-semibold">Log In</h4>

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

      <div className="mb-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 text-brand-600 accent-color-brand-600"
            checked={isRememberMe}
            onChange={() => setIsRememberMe(!isRememberMe)}
          />
          <span className="text-lg text-gray-700">Remember me</span>
        </label>
      </div>

      <div className="mb-6 flex w-fit flex-col">
        {/*<NavLink*/}
        {/*  to="/forgot-password"*/}
        {/*  className="p-0.5 text-base font-light text-brand-600 hover:underline"*/}
        {/*>*/}
        {/*  Forgot password?*/}
        {/*</NavLink>*/}

        <NavLink
          to="/register"
          className="p-0.5 text-base font-light text-brand-600 hover:underline"
        >
          Create an account
        </NavLink>
      </div>

      <div className="flex w-full justify-end">
        <Button
          className="flex w-full items-center justify-center font-light"
          type="submit"
          size="medium"
          disabled={isLoading}
        >
          {isLoading ? <SpinnerMini /> : 'Login'}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
