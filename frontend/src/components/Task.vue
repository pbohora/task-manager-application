<template>
  <v-card class="mx-auto" border flat>
    <template #title>
      {{ task.name }}
    </template>
    <template #subtitle>
      {{ task.type }}
    </template>
    <template #append>
      <v-btn
        class="text-none"
        color="primary"
        text="Complete"
        variant="text"
        slim
        @click="taskStore.completeTask(task.id)"
      />
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { type Task } from '../types'
import { useTaskStore } from '../stores/tasks'

const taskStore = useTaskStore()

defineProps<{
  task: Task
}>()
</script>
