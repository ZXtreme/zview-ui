<template>
  <z-timeline>
    <z-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
      {{ activity.content }}
    </z-timeline-item>
  </z-timeline>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: "Start Project",
    timestamp: "2023-01-01",
  },
  {
    content: "Approved",
    timestamp: "2023-01-02",
  },
  {
    content: "Success",
    timestamp: "2023-01-03",
  },
];
</script>
