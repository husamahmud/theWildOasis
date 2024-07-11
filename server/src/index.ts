import express from 'express'
import cors from 'cors'
// import cookieParser from 'cookie-parser'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
// app.use(cookieParser())

/**
 * Root route - Info about cabins endpoints
 **/
app.get('/', (req, res) => {
  res.json({
    '/api/v1/cabins': 'for cabins routes 🏡',
    '/api/v1/guests': 'for guests routes 👨‍👩‍👧‍👦',
    '/api/v1/bookings': 'for bookings routes 📅',
    '/api/v1/user': 'for user routes 👤',
    '/api/v1/auth': 'for auth routes 🔐',
  })
})

/**
 * API Routes
 **/
import CabinsRoute from './routes/cabins.route'
import GuestsRoute from './routes/guests.route'
import BookingsRoute from './routes/bookings.route'
import UserRoute from './routes/user.route'
import AuthRoute from './routes/auth.route'

app.use('/api/v1/cabins', CabinsRoute)
app.use('/api/v1/guests', GuestsRoute)
app.use('/api/v1/bookings', BookingsRoute)
app.use('/api/v1/users', UserRoute)
app.use('/api/v1/auth', AuthRoute)

/**
 * Start the server
 **/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
