<template>
  <div class="demo-popover">
    <z-popover v-model="visible" trigger="manual" placement="bottom-start">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <z-button size="mini" @click="visible = false">取消</z-button>
        <z-button type="primary" size="mini" @click="visible = false">确定</z-button>
      </div>
      <template #reference>
        <z-button size="medium" @click="handler">删除</z-button>
      </template>
    </z-popover>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

function handler() {
  visible.value = !visible.value;
  console.log(visible.value);
}
</script>
