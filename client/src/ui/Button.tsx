import React from 'react'

const SIZES = {
  small: 'px-3 py-2 text-center text-xl font-semibold uppercase',
  medium: 'px-6 py-5 text-2xl font-medium',
  large: 'px-5 py-10 text-2xl font-medium',
}

const VARIANTS = {
  primary: 'text-brand-50 bg-brand-600 hover:bg-brand-700',
  secondary: 'text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50',
  danger: 'text-red-100 bg-red-700 hover:bg-red-800',
}

const Button: React.FC<{
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'danger'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}> = ({
  children,
  size = 'medium',
  variant = 'primary',
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={`${SIZES[size]} ${VARIANTS[variant]} ${className} rounded-sm border-none shadow-sm`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}

export default Button