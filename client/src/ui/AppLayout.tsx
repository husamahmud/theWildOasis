import { Outlet } from 'react-router-dom'

import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
