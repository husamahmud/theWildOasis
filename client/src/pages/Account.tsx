import Row from '../ui/Row.tsx'
import UpdateUserDataForm from '../features/auth/UpdateUserDataForm.tsx'

const Account = () => {
  return (
    <>
      <h1>Update your Account</h1>

      <Row>
        <UpdateUserDataForm />
      </Row>
    </>
  )
}

export default Account
