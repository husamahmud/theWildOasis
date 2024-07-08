import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

/**
 * Root route - Info about cabins endpoints
 **/
app.get('/', (req, res) => {
  res.json({
    '/api/v1/cabins': 'for cabins routes 🏡',
    '/api/v1/guests': 'for guests routes 👨‍👩‍👧‍👦',
    '/api/v1/bookings': 'for bookings routes 📅',
    '/api/v1/user': 'for user routes 👤',
  })
})

/**
 * API Routes
 **/
import CabinsRoute from './routes/cabins.route'
import GuestsRoute from './routes/guests.route'
import BookingsRoute from './routes/bookings.route'
import UserRoute from './routes/user.route'

app.use('/api/v1/cabins', CabinsRoute)
app.use('/api/v1/guests', GuestsRoute)
app.use('/api/v1/bookings', BookingsRoute)
app.use('/api/v1/users', UserRoute)

/**
 * Start the server
 **/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
