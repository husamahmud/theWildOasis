import express from 'express'

import { BookingsController } from '../controllers/bookings.controller'

const router = express.Router()

const {
  createBooking,
  getAllBookings,
  getBookingById,
  deleteBooking,
  updateBooking,
} = BookingsController

router
  .post('/', createBooking)
  .post('/:id', updateBooking)
  .get('/', getAllBookings)
  .get('/:id', getBookingById)
  .delete('/:id', deleteBooking)

export default router
