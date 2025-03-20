export interface Task {
  id: string
  name: string
  type: 'Circle' | 'Rectangle' | 'Polygon'
}

export interface TaskInfo {
  taskListName: string
  tasks: Task[]
}
