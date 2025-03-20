import express from 'express'
import { getTasks } from '../controllers/task.controller'

const tasksRouter = express.Router()
tasksRouter.get('/', getTasks)

export default tasksRouter
