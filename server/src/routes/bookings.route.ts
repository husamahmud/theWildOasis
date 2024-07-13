import express from 'express'

import { BookingsController } from '../controllers/bookings.controller'

const router = express.Router()

const {
  createBooking,
  getAllBookings,
  getBookingById,
  deleteBooking,
  updateBooking,
  checkInOutBooking,
} = BookingsController

router
  .post('/', createBooking)
  .post('/:id', updateBooking)
  .post('/check-in-out/:id', checkInOutBooking)
  .get('/', getAllBookings)
  .get('/:id', getBookingById)
  .delete('/:id', deleteBooking)

export default router
