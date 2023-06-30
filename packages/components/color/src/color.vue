<template>
  <div class="z-color">
    <div class="z-color__header" :style="[
      { backgroundColor: main },
      content['length'] === 0 ? 'height: 112px' : '',
    ]">
      <div class="z-color__header--title">{{ mainTitle }}</div>
      <div class="z-color__header--color">{{ main }}</div>
    </div>
    <div class="z-color__footer" v-if="content.length">
      <div class="z-color__footer--item" v-for="(item, index) in content" :key="index" :style="{ backgroundColor: item }">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ColorProps } from "./color";

defineProps(ColorProps);
</script>

<script lang="ts">
export default {
  name: "ZColor",
};
</script>
