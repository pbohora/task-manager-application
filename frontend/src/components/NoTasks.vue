<template>
  <v-card class="mx-auto" max-width="700" border flat>
    <template #title> Completed tasks </template>

    <template #append>
      <v-btn
        block
        class="text-none"
        color="primary"
        text="Request Tasks"
        slim
        @click="taskStore.fetchTasks"
      />
    </template>

    <v-divider />

    <v-empty-state
      v-if="taskStore.completedTasks.length === 0"
      title="There are no tasks   "
      text="Click the button to request tasks"
      class="mt-10"
    />

    <CompletedTasks v-else class="mt-10" :completed-tasks="taskStore.completedTasks" />
  </v-card>
</template>

<script setup lang="ts">
  import CompletedTasks from './CompletedTasks.vue'
  import { useTaskStore } from '../stores/tasks'

  const taskStore = useTaskStore()
</script>
