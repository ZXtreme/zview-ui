<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">default</span>
      <z-image :src="src"></z-image>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <z-image :src="src">
        <template #placeholder>
          <div class="loading-slot">
            <z-icon name="loading"></z-icon>
          </div>
        </template>
        <template #error>
          <div class="error-slot">
            <z-icon name="image"></z-icon>
          </div>
        </template>
      </z-image>
    </div>
  </div>
</template>

<script setup lang="ts">
const src =
  "https://cube.hemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
</script>

<style scoped>
.demo-image__placeholder {
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
}

.block {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block .z-image {
  margin-top: 15px;
  background-color: #c4c4c6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block .z-image .loading-slot {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
