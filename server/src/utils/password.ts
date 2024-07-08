import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, Number(process.env.HASH_SECRET) || 10)
}

export const comparePassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}
