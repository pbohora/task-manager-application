import { describe, it, expect, beforeAll, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Task from '../src/components/Task.vue'
import { useTaskStore } from '../src/stores/tasks'
import { Task as TaskType } from '../src/types'

const vuetify = createVuetify({
  components,
  directives
})

describe('Task.vue', () => {
  let wrapper: VueWrapper
  let pinia: Pinia
  let taskStore: ReturnType<typeof useTaskStore>
  let task: TaskType

  beforeAll(() => {
    pinia = createPinia()
    setActivePinia(pinia)
    taskStore = useTaskStore()

    task = {
      id: '1',
      name: 'My Task',
      type: 'Rectangle'
    }

    wrapper = mount(Task, {
      props: {
        task
      },
      global: {
        plugins: [pinia, vuetify]
      }
    })
  })

  it('renders task name and type correctly', () => {
    expect(wrapper.text()).toContain(task.name)
    expect(wrapper.text()).toContain(task.type)
  })

  it('calls completeTask when "Complete" button is clicked', async () => {
    const completeTaskSpy = vi.spyOn(taskStore, 'completeTask')

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    await button.trigger('click')

    expect(completeTaskSpy).toHaveBeenCalledWith(task.id)
  })
})
