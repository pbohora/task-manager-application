<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4">
      <h4 class="text-h3">Request Tasks</h4>
    </v-col>
    <v-col cols="12" md="4">
      <v-btn color="primary" @click="$emit('request-tasks')"> Request Tasks </v-btn>
    </v-col>
  </v-row>

  <v-empty-state
    v-if="completedTasks.length === 0"
    title="There are no tasks"
    text="Click the button to request tasks"
  />

  <CompletedTasks v-else :completedTasks="completedTasks" />
</template>

<script setup lang="ts">
  import { type Task } from '../types'
  import CompletedTasks from './CompletedTasks.vue'

  defineProps<{
    completedTasks: Task[]
  }>()

  defineEmits<{
    (event: 'request-tasks'): void
  }>()
</script>
