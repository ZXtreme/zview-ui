<template>
  <div class="z-from-input" :class="{
    'z-input-icon-before': iconBefore && iconBefore !== '',
    'z-input-icon-after': (iconAfter && iconAfter !== '') || clearable,
  }">
    <template v-if="type !== 'textarea'">
      <input class="z-input" v-bind="$attrs" :type="type" :value="text" :class="size" ref="input"
        @input.stop="handerInput" @blur="handlerBlur" @focus="handlerFocus" />
      <i class="z-after" :class="`z-icon-${iconAfter}`" v-if="iconAfter && iconAfter !== ''"></i>
      <i class="z-before" :class="`z-icon-${iconBefore}`" v-if="iconBefore && iconBefore !== ''"></i>
      <transition name="fade">
        <span class="z-icon-h" v-if="clearable && textLength > 0" @click.stop="clearInput"></span>
      </transition>
    </template>
    <template v-else>
      <textarea class="z-textarea" v-bind="$attrs" :value="text" :maxlength="maxlength" ref="input"
        @input.stop="handerInput" @blur="handlerBlur" @focus="handlerFocus">
      </textarea>
      <span class="z-textarea-maxlength">{{ textLength }}/{{ maxlength }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { InputProps } from "./input";
import { ref, watch, computed } from "vue";

const props = defineProps(InputProps);
const emit = defineEmits(["change", "blur", "focus"]);
const text = ref(props.modelValue);
const size = computed(() => {
  return {
    [`z-input-${props.size}`]: props.size,
  };
});
const input = ref<null | HTMLInputElement>(null);

const textLength = computed(() => {
  return text.value ? String(text.value).length : 0;
});

// 防止外部传入的 modelValue 发生改变
watch(
  () => props.modelValue,
  (newVal) => {
    text.value = newVal ?? "";
  },
);

const handerInput = (e: Event) => {
  text.value = (e.target as HTMLInputElement).value;
  emit("change", text.value);
};

const clearInput = () => {
  text.value = "";
  emit("change", text.value);
};

// 触发绑定在组件上的事件
const handlerBlur = (e: FocusEvent) => {
  emit("blur", e, (e.target as HTMLInputElement).value);
};
const handlerFocus = (e: FocusEvent) => {
  emit("focus", e, (e.target as HTMLInputElement).value);
};

// 手动触发事件
const inputGetFocus = () => {
  input.value?.focus();
};
const inputGetBlur = () => {
  input.value?.blur();
};

// 向外暴露手动触发事件函数

// 使用 <script setup> 语法糖的组件是默认关闭的
// 也即通过模板 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。
// 为了在 <script setup> 语法糖组件中明确要暴露出去的属性，使用 defineExpose 编译器宏将需要暴露出去的变量与方法放入暴露出去就可以
defineExpose({
  inputGetFocus,
  inputGetBlur,
});
</script>

<script lang="ts">
export default {
  name: "ZInput",
};
</script>
