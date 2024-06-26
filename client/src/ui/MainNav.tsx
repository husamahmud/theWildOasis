import { NavLink } from 'react-router-dom'
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2'

const navItems = [
  { to: '/dashboard', icon: <HiOutlineHome />, text: 'Home' },
  { to: '/bookings', icon: <HiOutlineCalendarDays />, text: 'Bookings' },
  { to: '/cabins', icon: <HiOutlineHomeModern />, text: 'Cabins' },
  { to: '/users', icon: <HiOutlineUsers />, text: 'Users' },
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
                `flex items-center gap-3 text-[1.6rem] font-medium p-3 px-6 transition-all ${
                  isActive
                    ? 'text-color-grey-800 bg-color-grey-50 rounded-sm'
                    : 'text-color-grey-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 transition-all ${
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
