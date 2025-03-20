export type TaskType = 'Rectangle' | 'Circle' | 'Polygon'

export interface Task {
  id: string
  name: string
  type: TaskType
}

import { v4 as uuidv4 } from 'uuid'
import logger from '../utils/logger'

const taskTypes: TaskType[] = ['Rectangle', 'Circle', 'Polygon']

/**
 * Generates a new task with a unique ID, random name, and random type.
 * Logs the generated task details.
 *
 * @returns {Task} A newly created task object.
 */

export const generateTask = (): Task => {
  const task = {
    id: uuidv4(),
    name: `Task ${Math.floor(Math.random() * 1000)}`,
    type: taskTypes[Math.floor(Math.random() * taskTypes.length)]
  }
  logger.info(`Generated task: ${JSON.stringify(task)}`)
  return task
}
