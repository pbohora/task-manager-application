import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper, flushPromises } from '@vue/test-utils'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import NoTasks from '../src/components/NoTasks.vue'
import CompletedTasks from '../src/components/CompletedTasks.vue'
import { useTaskStore } from '../src/stores/tasks'

const vuetify = createVuetify({
  components,
  directives
})

describe('NoTasks.vue', () => {
  let wrapper: VueWrapper
  let taskStore: ReturnType<typeof useTaskStore>

  beforeEach(() => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })

    vi.mock('axios', () => ({
      default: {
        get: vi.fn().mockResolvedValue({
          data: {
            taskListName: 'Test List',
            tasks: []
          }
        })
      }
    }))

    wrapper = mount(NoTasks, {
      global: {
        plugins: [pinia, vuetify]
      }
    })

    setActivePinia(pinia)
    taskStore = useTaskStore()

    taskStore.fetchTasks = vi.fn().mockImplementation(() => Promise.resolve())

    taskStore.completedTasks = [
      { id: '1', name: 'Circle Task', type: 'Circle' },
      { id: '2', name: 'Rectangle Task', type: 'Rectangle' }
    ]

    wrapper = mount(NoTasks, {
      global: {
        plugins: [pinia, vuetify]
      }
    })
  })

  it('renders the "Request Tasks" button correctly', () => {
    const button = wrapper.find('button')
    expect(button.text()).toBe('Request Tasks')
  })

  it('triggers taskStore.fetchTasks when "Request Tasks" button is clicked', async () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    await button.trigger('click')

    await flushPromises()

    expect(taskStore.fetchTasks).toHaveBeenCalled()
  })

  it('displays CompletedTasks component when there are completed tasks', () => {
    const completedTasksComponent = wrapper.findComponent(CompletedTasks)
    expect(completedTasksComponent.exists()).toBe(true)
    expect(completedTasksComponent.props('completedTasks')).toEqual(taskStore.completedTasks)
  })

  it('displays the empty state when there are no completed tasks', async () => {
    taskStore.completedTasks = []
    await wrapper.vm.$nextTick()

    const emptyState = wrapper.findComponent({ name: 'VEmptyState' })
    expect(emptyState.exists()).toBe(true)
    expect(emptyState.text()).toContain('There are no tasks')
  })
})
