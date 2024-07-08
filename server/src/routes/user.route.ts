import express from 'express'

import { UserController } from '../controllers/user.controller'

const router = express.Router()

const {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = UserController

router
  .post('/', createUser)
  .post('/:id', updateUser)
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .delete('/:id', deleteUser)

export default router
