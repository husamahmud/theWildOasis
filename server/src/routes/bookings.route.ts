import express from 'express'

import { BookingsController } from '../controllers/bookings.controller'

const router = express.Router()

const {
  createBooking,
  getAllBookings,
  getBookingById,
  getBookingsAfterDate,
  deleteBooking,
  updateBooking,
  checkInOutBooking,
  deleteAllBookings,
} = BookingsController

router
  .post('/', createBooking)
  .post('/:id', updateBooking)
  .post('/check-in-out/:id', checkInOutBooking)
  .get('/', getAllBookings)
  .get('/:id', getBookingById)
  .get('/after/:date', getBookingsAfterDate)
  .delete('/all', deleteAllBookings)
  .delete('/:id', deleteBooking)

export default router
