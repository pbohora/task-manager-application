<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="task in completedTasks" :key="task.id" cols="2">
        <TaskShape :task="task" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { type Task } from '../types'

defineProps<{
  completedTasks: Task[]
}>()
</script>
