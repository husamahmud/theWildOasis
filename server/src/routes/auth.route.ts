import express from 'express'

import { AuthController } from '../controllers/auth.controller'

const router = express.Router()

const {
  register,
  login,
  logout,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = AuthController

router
  .post('/register', register)
  .post('/login', login)
  .post('/logout', logout)
  .put('/update/:id', updateUser)
  .get('/users', getAllUsers)
  .get('/user/:id', getUserById)
  .delete('/delete/:id', deleteUser)

export default router
