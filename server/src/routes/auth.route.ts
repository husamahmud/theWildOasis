import express from 'express'

import { AuthController } from '../controllers/auth.controller'

const router = express.Router()

const {
  register,
  login,
  logout,
  refreshToken,
} = AuthController

router
  .post('/register', register)
  .post('/login', login)
  .post('/logout', logout)
  .post('/refresh-token', refreshToken)

export default router
