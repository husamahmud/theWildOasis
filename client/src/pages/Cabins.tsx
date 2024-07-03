import { useState } from 'react'

import CabinsTable from '../features/cabins/CabinsTable.tsx'
import Row from '../ui/Row.tsx'
import Button from '../ui/Button.tsx'
import CreateEditCabin from '../features/cabins/CreateEditCabin.tsx'
import Modal from '../ui/Modal.tsx'
import CabinTableOperations from '../features/cabins/CabinTableOperations.tsx'

export default function Cabins() {
  const [openForm, setOpenForm] = useState(false)

  return (
    <>
      <Row type="horizontal">
        <h1>All cabins</h1>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinsTable />
        <Button onClick={() => setOpenForm(!openForm)}>Add new cabin</Button>
      </Row>

      {openForm && (
        <Modal onClick={() => setOpenForm(!openForm)}>
          <CreateEditCabin closeForm={() => setOpenForm(!openForm)} />
        </Modal>
      )}
    </>
  )
}
