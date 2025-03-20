import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import logger from './utils/logger'

const app = express()
app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})

export default app
