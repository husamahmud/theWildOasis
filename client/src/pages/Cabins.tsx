import CabinsTable from '../features/cabins/CabinsTable.tsx'
import Row from '../ui/Row.tsx'

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <h1>All cabins</h1>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinsTable />
      </Row>
    </>
  )
}
