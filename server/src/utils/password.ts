import bcrypt from 'bcryptjs'

export const hash = async (password: string) => {
  return bcrypt.hash(password, Number(process.env.HASH_SECRET) || 10)
}

export const comparePasswords = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}
