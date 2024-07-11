import Row from '../ui/Row.tsx'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm.tsx'

export default function Settings() {
  return (
    <Row>
      <h1>Settings</h1>
      <UpdateSettingsForm />
    </Row>
  )
}
