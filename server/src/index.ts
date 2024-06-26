import express from 'express'
import dotenv from 'dotenv'

import CabinsRoute from './routes/cabins.route'

dotenv.config()

const app = express()
const PORT = 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use('/api/v1/cabins', CabinsRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
