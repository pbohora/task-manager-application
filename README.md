# Task Manager App


A simple task management application built with **Vue 3**, **Vuetify**, **Pinia** and **TypeScript**, with a **Node.js** backend using **Express.js**.

## Features
- Randomly generate and display a list of 1 to 10 tasks. Each task will be unique and varied in nature.
- Present the tasks in a visually organized list, where each task includes a name, type, and an option to mark it as complete.
- Once a task is marked as complete, it moves to the "Completed Tasks" section.
- The completed tasks are displayed alongside custom SVG icons that represent the type of task

## Getting Started

### Prerequisites
- **Node.js** (version 20 or higher)
- **npm** (version 10 or higher)

## Tech/framework used
### Frontend
- Vue 3
- Vuetify
- Pinia
- Vitest

### Backend
- Nodejs (Expressjs)
- Winston
- Jest

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/pbohora/task-manager-application.git
   ```
2. Navigate to app directory:
```bash
   cd task-manager-application
   ```

## Starting the Application Locally
### Frontend
1. Navigate to frontend:
```bash
   cd frontend
   ```
2. Install packages:
```bash
    npm install
   ```
3. Start app:
```bash
   npm run dev
   ```
4. Visit:
http://localhost:8080

### Backend
1. Navigate to backend:
```bash
   cd backend
   ```
2. Install packages:
```bash
    npm install
   ```
3. Run this command:
```bash
   npm run dev
   ```
4. Visit:
http://localhost:3000/api/v1/tasks

## Running Tests
### Frontend
To run the test run the command in frontend directory
```bash
   npm run test:unit
   ```
### Backend
To run the test run the command in backend directory
```bash
   npm run test
   ```
## Other useful commands
Navigate to frontend or backend directory
1. Lint:
```bash
   npm run lint
   ```
2. Format:
```bash
   npm run format
   ```
   
