import { defineStore } from 'pinia'
import axios from 'axios'

import type { Task, TaskInfo } from '../types'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    taskListName: '',
    tasks: [] as Task[],
    completedTasks: [] as Task[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get<TaskInfo>('/api/v1/tasks')
        this.taskListName = response.data.taskListName
        this.tasks = response.data.tasks
      } catch (error) {
        console.error('Failed to fetch tasks:', error)
        this.error = 'Failed to fetch tasks'
      } finally {
        this.loading = false
      }
    },
    completeTask(taskId: string) {
      const taskIndex = this.tasks.findIndex((t) => t.id === taskId)
      if (taskIndex !== -1) {
        const [task] = this.tasks.splice(taskIndex, 1)
        this.completedTasks.push(task)
      }
    }
  }
})
