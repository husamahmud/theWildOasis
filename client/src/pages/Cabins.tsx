import { useState } from 'react'

import CabinsTable from '../features/cabins/CabinsTable.tsx'
import Row from '../ui/Row.tsx'
import Button from '../ui/Button.tsx'
import AddCabin from '../features/cabins/AddCabin.tsx'
import Modal from '../ui/Modal.tsx'

export default function Cabins() {
  const [openForm, setOpenForm] = useState(false)

  return (
    <>
      <Row type="horizontal">
        <h1>All cabins</h1>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinsTable />

        <Button onClick={() => setOpenForm(!openForm)}>Add new cabin</Button>
      </Row>

      {openForm && (
        <Modal onClick={() => setOpenForm(!openForm)}>
          <AddCabin closeForm={() => setOpenForm(!openForm)} />
        </Modal>
      )}
    </>
  )
}
