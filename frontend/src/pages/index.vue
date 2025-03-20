<template>
  <v-container>
    <NoTasks
      v-if="taskStore.tasks.length === 0"
      :completed-tasks="taskStore.completedTasks"
      @request-tasks="taskStore.fetchTasks"
    />
  </v-container>
</template>

<script lang="ts" setup>
  import { useTaskStore } from '../stores/tasks'

  const taskStore = useTaskStore()
</script>
