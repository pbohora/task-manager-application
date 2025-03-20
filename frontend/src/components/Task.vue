<template>
  <v-card class="mx-auto" max-width="700" border flat>
    <v-list-item class="pa-6">
      <template v-slot:title> {{ task.name }} </template>
      <template v-slot:subtitle>{{ task.type }}</template>
      <template v-slot:append>
        <v-btn
          class="text-none"
          color="primary"
          text="Complete"
          variant="text"
          @click="taskStore.completeTask(task.id)"
          slim
        ></v-btn>
      </template>
    </v-list-item>
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
