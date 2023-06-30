<template>
  <z-card class="card">
    <template #header>
      <div class="card-header">
        <div>Title</div>
      </div>
    </template>
    <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
    <template #handle>
      <div class="card-handle">
        <z-button>handle</z-button>
      </div>
    </template>
  </z-card>
</template>

<style>
.card {
  width: 400px;
}
</style>
