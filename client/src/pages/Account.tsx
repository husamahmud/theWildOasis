import Row from '../ui/Row.tsx'
import UpdateUserDataForm from '../features/auth/UpdateUserDataForm.tsx'
import UpdateUserPassword from '../features/auth/UpdateUserPassword.tsx'

const Account = () => {
  return (
    <>
      <h1>Update your Account</h1>

      <Row>
        <UpdateUserDataForm />
        <UpdateUserPassword />
      </Row>
    </>
  )
}

export default Account
