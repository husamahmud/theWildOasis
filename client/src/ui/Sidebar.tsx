import Logo from './Logo'
import MainNav from './MainNav.tsx'

export default function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col gap-12 border-r-2 border-grey-100 bg-grey-0 px-9 py-10">
      <Logo />
      <MainNav />
    </aside>
  )
}
