import Row from '../ui/Row.tsx'
import DashboardLayout from '../features/dashboard/DashboardLayout.tsx'
import DashboardFilter from '../features/dashboard/DashboardFilter.tsx'

export default function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <h1>Dashboard</h1>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  )
}
