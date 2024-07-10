import jwt from 'jsonwebtoken'

/**
 * Generate access token
 **/
export function generateAccessToken(user: any) {
  return jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: '15m' },
  )
}

/**
 * Generate refresh token
 **/
export function generateRefreshToken(user: any) {
  return jwt.sign(
    { userId: user.id },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: '7d' },
  )
}
