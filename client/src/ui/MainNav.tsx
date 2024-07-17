import { NavLink } from 'react-router-dom'
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
} from 'react-icons/hi2'

const navItems = [
  { to: '/dashboard', icon: <HiOutlineHome />, text: 'Home' },
  { to: '/bookings', icon: <HiOutlineCalendarDays />, text: 'Bookings' },
  { to: '/cabins', icon: <HiOutlineHomeModern />, text: 'Cabins' },
  { to: '/settings', icon: <HiOutlineCog6Tooth />, text: 'Settings' },
]

export default function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {navItems.map(({ to, icon, text }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 px-6 text-[1.6rem] font-medium transition-all ${
                  isActive
                    ? 'rounded-sm bg-color-grey-50 text-color-grey-800'
                    : 'text-color-grey-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`h-6 w-6 transition-all ${
                      isActive ? 'text-color-brand-600' : 'text-color-grey-400'
                    }`}
                  >
                    {icon}
                  </span>
                  <span>{text}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
