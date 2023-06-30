<template>
  <div class="z-switch-default" :class="sizeClass">
    <span v-if="inactiveText && !inlinePrompt" class="z-switch-label z-switch-label-left"
      :class="[!curChecked ? 'is-active' : '']">
      {{ inactiveText }}
    </span>
    <span v-if="inactiveIcon && !inlinePrompt" class="z-switch-label z-switch-label-left"
      :class="[!curChecked ? 'is-active' : '']">
      <i :class="`z-icon-${inactiveIcon}`"></i>
    </span>
    <div class="z-switch-content" :class="styleClass" @click="handleSwitch">
      <input type="checkbox" v-model="curChecked" />
      <span class="core" :class="[curChecked ? 'on' : 'off']" :style="coreStyle">
        <span v-if="inlinePrompt" class="z-switch-inner" :class="`z-switch-inner--${size}`">
          <span v-if="activeText">
            {{ curChecked ? activeText : inactiveText }}
          </span>
          <span v-if="activeIcon">
            <i v-if="!curChecked" :class="`z-icon-${activeIcon}`"></i>
            <i v-else :class="`z-icon-${inactiveIcon}`"></i>
          </span>
        </span>
      </span>
    </div>
    <span class="z-switch-label z-switch-label-right" :class="[curChecked ? 'is-active' : '']"
      v-if="activeText && !inlinePrompt">
      {{ activeText }}
    </span>
    <span class="z-switch-label z-switch-label-right" :class="[curChecked ? 'is-active' : '']"
      v-if="activeIcon && !inlinePrompt">
      <i :class="`z-icon-${activeIcon}`"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { SwitchProps } from "./switch";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps(SwitchProps);
const curChecked = ref(props.modelValue);  // 是否选中

const styleClass = computed(() => {
  return {
    "is-disabled": props.disabled,
  };
});

const sizeClass = computed(() => {
  return {
    [`z-switch--${props.size}`]: props.size,
  };
});

const coreStyle = computed(() => {
  let newColor = curChecked.value ? props.activeColor : props.inactiveColor;
  return {
    backgroundColor: newColor,
  };
});

const handleSwitch = () => {
  if (props.disabled) return;
  curChecked.value = !curChecked.value;
  emit("update:modelValue", curChecked.value);
  emit("change", curChecked.value);
};
</script>

<script lang="ts">
export default {
  name: "ZSwitch"
};
</script>
