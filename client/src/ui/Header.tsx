import UserAvatar from '../features/auth/UserAvatar.tsx'
import HeaderMenu from './HeaderMenu.tsx'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-10 border-b-2 border-grey-100 bg-grey-0 px-11 py-12">
      <UserAvatar />
      <HeaderMenu />
    </header>
  )
}
