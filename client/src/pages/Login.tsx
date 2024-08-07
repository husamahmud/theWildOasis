import Logo from '../ui/Logo.tsx'
import LoginForm from '../features/auth/LoginForm.tsx'

export default function Login() {
  return (
    <div className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-14 bg-grey-50">
      <Logo />

      <LoginForm />
    </div>
  )
}
