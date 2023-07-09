<template>
  <div class="alignment-container">
    <z-space>
      string
      <z-card>body</z-card>
      <z-card>
        <template #header> header </template>
        body
      </z-card>
    </z-space>
  </div>
  <div class="alignment-container">
    <z-space alignment="flex-start">
      string
      <z-card>body</z-card>
      <z-card>
        <template #header> header </template>
        body
      </z-card>
    </z-space>
  </div>
  <div class="alignment-container">
    <z-space alignment="flex-end">
      string
      <z-card>body</z-card>
      <z-card>
        <template #header> header </template>
        body
      </z-card>
    </z-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
