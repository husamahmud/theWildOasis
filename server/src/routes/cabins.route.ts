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
  .post('/:cabinNumber', updateCabin)
  .get('/', getAllCabins)
  .get('/:cabinNumber', getCabin)
  .delete('/:cabinNumber', deleteCabin)

export default router
