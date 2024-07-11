import jwt from 'jsonwebtoken'

export function generateToken(user: any, expiresIn: number): string {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { subject: user.id, expiresIn },
  )
}
