<template>
  <span class="z-breadcrumb__item">
    <span>
      <slot />
    </span>
    <span class="item__separator">
      <z-icon v-if="separatorIcon" :name="separatorIcon"></z-icon>
      <span v-else>{{ separator }}</span>
    </span>
  </span>
</template>

<script lang="ts" setup>
import ZIcon from "../../icon";
import { inject, toRefs } from "vue";
import { BreadcrumbItemProps } from "./breadcrumb-item";

const props = defineProps(BreadcrumbItemProps);
// 接收父组件props
const breadcrumbProps = inject("breadcrumbProps", { separator: undefined, separatorIcon: undefined });
const { separator, separatorIcon } = toRefs(breadcrumbProps);
</script>

<script lang="ts">
export default {
  name: "ZBreadcrumbItem",
};
</script>
