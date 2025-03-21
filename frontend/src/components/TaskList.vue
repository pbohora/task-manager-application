<script setup lang="ts">
  import { type Task } from '../types'

  defineProps<{
    tasks: Task[]
    listName: string
  }>()
</script>

<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title>{{ listName }}</v-card-title>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task.id">
        <Task :task="task" />
      </v-list-item>
    </v-list>
  </v-card>
</template>
