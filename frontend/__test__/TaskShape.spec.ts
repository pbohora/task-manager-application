import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import TaskShape from '../src/components/TaskShape.vue'
import { Task } from '../src/types'

const vuetify = createVuetify({
  components,
  directives
})

describe('TaskShape.vue', () => {
  let wrapper: VueWrapper
  let task: Task

  beforeEach(() => {
    task = { id: '2', name: 'Task 2', type: 'Circle' }

    wrapper = mount(TaskShape, {
      props: {
        task
      },
      global: {
        plugins: [vuetify]
      }
    })
  })

  it('renders a correct shape according to task type"', () => {
    expect(wrapper.find('circle').exists()).toBe(true)
  })

  it('displays the correct task name', () => {
    expect(wrapper.text()).toContain(task.name)
  })
})
