import { Router } from 'express'
import { home } from '../controllers/api'

const rootRouter = Router()
rootRouter.get('/', home)

export default rootRouter
