<template>
  <z-card class="card">
    <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
  </z-card>
</template>

<style>
.card {
  width: 400px;
}
</style>
