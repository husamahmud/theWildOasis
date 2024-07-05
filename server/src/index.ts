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
  })
})

/**
 * API Routes
 **/
import CabinsRoute from './routes/cabins.route'
import GuestsRoute from './routes/guests.route'
import BookingsRoute from './routes/bookings.route'

app.use('/api/v1/cabins', CabinsRoute)
app.use('/api/v1/guests', GuestsRoute)
app.use('/api/v1/bookings', BookingsRoute)

/**
 * Start the server
 **/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
