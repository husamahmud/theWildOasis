import { HiArrowRightOnRectangle, HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import useLogout from '../features/auth/useLogout.ts'

import Button from './Button.tsx'

const HeaderMenu = () => {
  const navigate = useNavigate()
  const { logout, isLoading } = useLogout()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <ul className="flex gap-5">
      <Button
        onClick={() => navigate('account')}
        rounded={true}
        variant="secondary"
      >
        <HiOutlineUser />
      </Button>

      <Button
        rounded={true}
        disabled={isLoading}
        onClick={handleLogout}
        variant="secondary"
      >
        <HiArrowRightOnRectangle />
      </Button>
    </ul>
  )
}

export default HeaderMenu
