import express from 'express'

import { SettingsController } from '../controllers/settings.controller'

const router = express.Router()

const {
  updateSettings,
  getSettings,
} = SettingsController

router
  .post('/:id', updateSettings)
  .get('/', getSettings)

export default router
