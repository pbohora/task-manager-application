import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import CompletedTasks from '../src/components/CompletedTasks.vue'
import TaskShape from '../src/components/TaskShape.vue'
import { Task } from '../src/types'

const vuetify = createVuetify({
  components,
  directives
})

describe('CompletedTasks.vue', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    const completedTasks: Task[] = [
      { id: '1', name: 'Circle Task', type: 'Circle' },
      { id: '2', name: 'Rectangle Task', type: 'Rectangle' },
      { id: '3', name: 'Polygon Task', type: 'Polygon' }
    ]

    wrapper = mount(CompletedTasks, {
      props: { completedTasks },
      global: { plugins: [vuetify] }
    })
  })

  it('renders the correct number of completed tasks', () => {
    const taskComponents = wrapper.findAllComponents(TaskShape)
    expect(taskComponents.length).toBe(3)
  })
})
