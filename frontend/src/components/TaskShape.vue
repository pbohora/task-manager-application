<template>
  <svg viewBox="0 0 100 100">
    <g transform="translate(50, 50)">
      <circle
        v-if="task.type === 'Circle'"
        cx="0"
        cy="0"
        r="20"
        :fill="shapeColors[task.type]?.fill || defaultColors.fill"
        :stroke="shapeColors[task.type]?.stroke || defaultColors.stroke"
        stroke-width="2"
      >
        <title>{{ task.title }}</title>
      </circle>

      <rect
        v-else-if="task.type === 'Rectangle'"
        x="-20"
        y="-20"
        width="40"
        height="40"
        :fill="shapeColors[task.type]?.fill || defaultColors.fill"
        :stroke="shapeColors[task.type]?.stroke || defaultColors.stroke"
        stroke-width="2"
      >
        <title>{{ task.title }}</title>
      </rect>

      <polygon
        v-else-if="task.type === 'Polygon'"
        points="0,-20 20,20 -20,20"
        :fill="shapeColors[task.type]?.fill || defaultColors.fill"
        :stroke="shapeColors[task.type]?.stroke || defaultColors.stroke"
        stroke-width="2"
      >
        <title>{{ task.title }}</title>
      </polygon>

      <circle
        v-else
        cx="0"
        cy="0"
        r="20"
        :fill="defaultColors.fill"
        :stroke="defaultColors.stroke"
        stroke-width="2"
      >
        <title>{{ task.title }}</title>
      </circle>
    </g>
  </svg>
</template>

<script setup lang="ts">
  import { type Task } from '../types'

  defineProps<{
    task: Task
  }>()

  // Task colors
  const shapeColors = {
    Circle: {
      fill: 'var(--circle-fill, #3498db)',
      stroke: 'var(--circle-stroke, #2980b9)'
    },
    Rectangle: {
      fill: 'var(--rectangle-fill, #e74c3c)',
      stroke: 'var(--rectangle-stroke, #c0392b)'
    },
    Polygon: {
      fill: 'var(--polygon-fill, #2ecc71)',
      stroke: 'var(--polygon-stroke, #27ae60)'
    }
  }

  const defaultColors = {
    fill: 'var(--default-fill, #9b59b6)',
    stroke: 'var(--default-stroke, #8e44ad)'
  }
</script>

<style scoped>
  :root {
    --circle-fill: #3498db;
    --circle-stroke: #2980b9;
    --rectangle-fill: #e74c3c;
    --rectangle-stroke: #c0392b;
    --polygon-fill: #2ecc71;
    --polygon-stroke: #27ae60;
    --default-fill: #9b59b6;
    --default-stroke: #8e44ad;
  }
</style>
