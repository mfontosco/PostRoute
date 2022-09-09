import express from 'express'
import { contactAdmin } from '../controllers/generalController.js'
const router = express()

router.post('/contact',contactAdmin)

export default router