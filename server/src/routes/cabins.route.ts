import express from 'express'

import { CabinsController } from '../controllers/cabins.controller'

const router = express.Router()

const { createCabin, getAllCabins, getCabin, deleteCabin } = CabinsController

router
  .post('/', createCabin)
  .get('/', getAllCabins)
  .get('/:cabinNumber', getCabin)
  .delete('/:cabinNumber', deleteCabin)

export default router
