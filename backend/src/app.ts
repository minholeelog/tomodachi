import express, { Application } from 'express'
import rootRouter from './routes/api'

const app: Application = express()

app.use('/api', rootRouter)

export default app
