import { Outlet } from 'react-router-dom'

import Header from './Header.tsx'
import Sidebar from './Sidebar.tsx'

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="overflow-x-hidden overflow-y-scroll bg-grey-50 px-10 pb-24 pt-16">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-14">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
