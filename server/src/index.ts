import express from 'express'

import CabinsRoute from './routes/cabins.route'

const app = express()
const PORT = 8000

// Parse JSON requests
app.use(express.json())

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
