import useUser from './useUser.ts'
import SpinnerMini from '../../ui/SpinnerMini.tsx'

const UserAvatar = () => {
  const { user, isLoading } = useUser()

  if (isLoading) return <SpinnerMini />
  const { avatar, username } = user || {}

  return (
    <div className="flex items-center gap-6">
      <img
        src={avatar || '/default-user.jpg'}
        alt={`${username}'s avatar`}
        className="block aspect-square w-14 rounded-full object-cover outline-2 outline-grey-100"
      />
      <span className="text-xl font-medium text-color-grey-600">
        Hi, {username}
      </span>
    </div>
  )
}

export default UserAvatar
