import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const allowedOrigins = [
  'https://the-wild-oasis-gilt-zeta.vercel.app',
  'http://localhost:5173',
]

app.use(express.json())
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false)
    }
    return callback(null, true)
  },
  credentials: true,
}))

/**
 * Root route - Info about cabins endpoints
 **/
app.get('/', (req, res) => {
  res.json({
    '/api/v1/cabins': 'for cabins routes 🏡',
    '/api/v1/guests': 'for guests routes 👨‍👩‍👧‍👦',
    '/api/v1/bookings': 'for bookings routes 📅',
    '/api/v1/auth': 'for auth routes 🔐',
    '/api/v1/settings': 'for settings routes ⚙️',
  })
})

/**
 * Import the routes
 **/
import CabinsRoute from './routes/cabins.route'
import GuestsRoute from './routes/guests.route'
import BookingsRoute from './routes/bookings.route'
import AuthRoute from './routes/auth.route'
import SettingsRoute from './routes/settings.route'

/**
 * Use the routes
 **/
app.use('/api/v1/cabins', CabinsRoute)
app.use('/api/v1/guests', GuestsRoute)
app.use('/api/v1/bookings', BookingsRoute)
app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/settings', SettingsRoute)

/**
 * Start the server
 **/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
