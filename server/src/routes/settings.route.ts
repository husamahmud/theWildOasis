import express from 'express'

import { SettingsController } from '../controllers/settings.controller'

const router = express.Router()

const {
  updateSettings,
  getSettings,
  createSettings,
} = SettingsController

router
  .post('/', createSettings)
  .post('/:id', updateSettings)
  .get('/', getSettings)

export default router
