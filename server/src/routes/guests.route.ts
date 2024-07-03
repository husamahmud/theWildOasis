import express from 'express'

import { GuestsController } from '../controllers/guests.controller'

const router = express.Router()

const {
  createGuest,
  getAllGuests,
  getGuest,
  deleteGuest,
  updateGuest,
} = GuestsController

router
  .post('/', createGuest)
  .post('/:id', updateGuest)
  .get('/', getAllGuests)
  .get('/:id', getGuest)
  .delete('/:id', deleteGuest)

export default router
