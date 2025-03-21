<template>
  <v-container>
    <v-alert v-if="error" closable color="error" icon="$error" title="Error" :text="error" />
    <div v-if="isLoading" class="text-center">
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
    </div>
    <NoTasks
      v-else-if="taskStore.tasks.length === 0"
      :completed-tasks="taskStore.completedTasks"
      @request-tasks="taskStore.fetchTasks"
    />
    <TaskList v-else :tasks="taskStore.tasks" :list-name="taskStore.taskListName" />
  </v-container>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useTaskStore } from '../stores/tasks'

  const taskStore = useTaskStore()

  const error = computed(() => taskStore.error)
  const isLoading = computed(() => taskStore.loading)
</script>
