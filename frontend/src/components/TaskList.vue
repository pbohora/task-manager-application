<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title>{{ taskStore.taskListName }}</v-card-title>
    <v-list>
      <v-list-item v-for="task in taskStore.tasks" :key="task.id">
        <Task :task="task" />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
  import { type Task } from '../types'

  import { useTaskStore } from '../stores/tasks'

  const taskStore = useTaskStore()
</script>
