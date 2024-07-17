import Row from '../ui/Row.tsx'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm.tsx'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants.ts'

export default function Settings() {
  useEffect(() => {
    async function getSettings() {
      const response = await fetch(`${BASE_URL}/settings`)
      const data = await response.json()
      console.log(data.data.id)
    }

    getSettings()
  }, [])

  return (
    <Row>
      <h1>Settings</h1>
      <UpdateSettingsForm />
    </Row>
  )
}
