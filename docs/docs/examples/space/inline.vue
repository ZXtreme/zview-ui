<template>
  <z-space inline class="inline-space">
    <z-button v-for="i in 2" :key="i">inline 按钮</z-button>
  </z-space>
  <z-button>space 外部按钮</z-button>
  <z-divider />
  <z-space class="space">
    <z-button v-for="i in 2" :key="i">非 inline 按钮</z-button>
  </z-space>
  <z-button>space 外部按钮</z-button>
</template>

<style>
.inline-space {
  width: 250px;
  margin-right: 10px;
  border: 1px solid #ccc;
}

.space {
  width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
</style>
