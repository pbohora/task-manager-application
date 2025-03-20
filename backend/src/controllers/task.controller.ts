import { Request, Response } from 'express'
import { generateTask } from '../services/task.service'
import logger from '../utils/logger'

/**
 * Handles the HTTP GET request to fetch a list of tasks.
 * Generates a random number of tasks, logs the task count,
 * and sends a JSON response containing the tasks.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 */

export const getTasks = (req: Request, res: Response) => {
  const taskCount: number = Math.floor(Math.random() * 10) + 1
  logger.info(`Fetching ${taskCount} tasks`)

  const tasks = Array.from({ length: taskCount }, generateTask)
  res.json({ taskListName: 'Simple Task List', tasks })
}
