import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import TaskList from '../src/components/TaskList.vue'
import Task from '../src/components/Task.vue'
import { useTaskStore } from '../src/stores/tasks'

const vuetify = createVuetify({
  components,
  directives
})

describe('TaskList.vue', () => {
  let wrapper: VueWrapper
  let taskStore: ReturnType<typeof useTaskStore>

  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
    taskStore = useTaskStore()

    taskStore.taskListName = 'My Task List'
    taskStore.tasks = [
      { id: '1', name: 'Task 1', type: 'Rectangle' },
      { id: '2', name: 'Task 2', type: 'Circle' }
    ]

    wrapper = mount(TaskList, {
      global: {
        plugins: [pinia, vuetify]
      }
    })
  })

  it('renders list name correctly', () => {
    expect(wrapper.text()).toContain('My Task List')
  })

  it('renders the correct number of tasks', () => {
    const taskComponents = wrapper.findAllComponents(Task)
    expect(taskComponents.length).toBe(taskStore.tasks.length)
  })

  it('renders task names correctly', () => {
    taskStore.tasks.forEach(task => {
      expect(wrapper.text()).toContain(task.name)
    })
  })
})
