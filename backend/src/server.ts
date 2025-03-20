import app from './app'
import logger from './utils/logger'

const port: number = 3000

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`)
})
