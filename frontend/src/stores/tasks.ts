import { defineStore } from 'pinia'
import axios, { type AxiosResponse } from 'axios'

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
    async fetchTasks(): Promise<void> {
      this.loading = true
      this.error = null

      try {
        const response: AxiosResponse<TaskInfo> = await axios.get<TaskInfo>('/api/v1/tasks')

        this.taskListName = response.data.taskListName
        this.tasks = response.data.tasks
      } catch (error) {
        console.error('Failed to fetch tasks:', error)
        this.error = 'Failed to fetch tasks'
      } finally {
        this.loading = false
      }
    },

    completeTask(taskId: string): void {
      const task = this.tasks.find(t => t.id === taskId)

      if (task) {
        this.tasks = this.tasks.filter(t => t.id !== taskId)
        this.completedTasks.push(task)
      }
    }
  }
})
