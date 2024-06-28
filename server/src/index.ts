import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

import CabinsRoute from './routes/cabins.route'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

// Root route - Info about cabins endpoints
app.get('/', (req, res) => {
  res.json({ '/api/v1/cabins': 'for cabins routes 🏡' })
})

// Add cabins routes to the app
app.use('/api/v1/cabins', CabinsRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
