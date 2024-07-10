import Logo from '../ui/Logo.tsx'
import RegisterForm from '../features/auth/RegisterForm.tsx'

export default function Register() {
  return (
    <div className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-14 bg-grey-50">
      <Logo />

      <RegisterForm />
    </div>
  )
}
