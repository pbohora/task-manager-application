import request from 'supertest'
import app from '../src/app'
import { Task } from '../src/services/task.service'

describe('Tasks API', () => {
  it('should return tasks with the correct length', async () => {
    const res = await request(app).get('/api/v1/tasks')
    expect(res.status).toBe(200)
    expect(res.body.tasks.length).toBeGreaterThanOrEqual(1)
    expect(res.body.tasks.length).toBeLessThanOrEqual(10)
  })

  it('should return tasks with valid types', async () => {
    const res = await request(app).get('/api/v1/tasks')
    expect(res.status).toBe(200)
    res.body.tasks.forEach((task: Task) => {
      expect(['Rectangle', 'Circle', 'Polygon']).toContain(task.type)
    })
  })
})
