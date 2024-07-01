import express from 'express'

import { CabinsController } from '../controllers/cabins.controller'

const router = express.Router()

const {
  createCabin,
  getAllCabins,
  getCabin,
  deleteCabin,
  updateCabin,
} = CabinsController

router
  .post('/', createCabin)
  .post('/:id', updateCabin)
  .get('/', getAllCabins)
  .get('/:id', getCabin)
  .delete('/:id', deleteCabin)

export default router
