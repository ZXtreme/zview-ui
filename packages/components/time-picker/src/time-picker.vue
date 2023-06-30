<template>
  <div class="z-time-picker-rel" ref="timePicker" @click="handleClick">
    <div class="z-time-picker" :class="selectInputClass" @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false">
      <span class="z-input__prefix">
        <i class="z-timepick__icon z-icon-time"></i>
      </span>
      <input type="text" class="z-input__inner" :value="inputText" :placeholder="placeholder" :disabled="disabled"
        :readonly="readonly" />
      <span class="z-input__suffix" @click="handleClear" v-if="showClose">
        <i class="z-timepick__icon z-icon-close"></i>
      </span>
    </div>
    <transition name="slide-fade">
      <div class="z-time-panel" :class="{ 'is-range': isRange, 'is-confirm': confirm, }" v-if="isShow" @click.stop>
        <div class="z-time-panel-body">
          <timeSpinner ref="startPicker" :title="isRange ? '开始时间' : ''" :hours="startValue.length && startValue[0]"
            :minutes="startValue.length && startValue[1]" :seconds="startValue.length && startValue[2]"
            @item-click="(type, item, scroll) => handlePickerClick('start', type, item, scroll)">
          </timeSpinner>
          <timeSpinner class="end-picker-time" v-if="isRange" ref="endPicker" :title="isRange ? '结束时间' : ''"
            :hours="endValue.length && endValue[0]" :minutes="endValue.length && endValue[1]"
            :seconds="endValue.length && endValue[2]"
            @item-click="(type, item, scroll) => handlePickerClick('end', type, item, scroll)">
          </timeSpinner>
        </div>
        <div class="z-time-panel__footer" v-if="confirm">
          <button class="z-time-panel__btn" @click="handleClear">清空</button>
          <button class="z-time-panel__btn btn__confirm" @click="handleConfirm">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import timeSpinner from "./time-spinner.vue";
import { computed, nextTick, reactive, ref, toRefs, watch } from "vue";
import { deepCopy, isString, withinNum, formatOutputValue, compareArrJoined } from "@zview-plus/utils";
import { TimePickerProps } from "./time-picker"
import { onClickOutside } from "@vueuse/core";
const emits = defineEmits(["on-change", "on-confirm", "on-clear"]);
const props = defineProps(TimePickerProps);

const inputHovering = ref(false); // 是否 hover
const isShow = ref(false); // 是否展示 timeSpinner
const startPicker = ref<any>(null); // 开始时间的 ref
const endPicker = ref<any>(null); // 结束时间的 ref
const timePicker = ref<any>(null);

type stateType = {
  inputText: string;
  startValue: Array<number>;
  endValue: Array<number>;
};
const state = reactive<stateType>({
  inputText: "",  // input的内容
  startValue: [], // 开始时间，[HH,mm,ss]
  endValue: [], // 结束时间，[HH,mm,ss]
});
const { inputText, startValue, endValue } = toRefs(state);

const selectInputClass = computed(() => {
  return {
    "z-time-picker-disabled": props.disabled,
  };
});

// 是否展示 clear 键
const showClose = computed(() => {
  return props.clearable && state.inputText && inputHovering.value;
});

// 是否选择时间范围
const isRange = computed(() => props.type === "timerange");

watch(
  () => props.modelValue,
  (newVal) => {
    nextTick(() => {
      updateCurrentValue(newVal);
    });
  },
  { immediate: true, deep: true }
);

watch(
  [() => state.startValue, () => state.endValue],
  () => {
    nextTick(() => {
      calcInputText();
    });
  },
  { immediate: true },
);

// 点击 time-picker 内部
const handleClick = () => {
  isShow.value = true
  initEvent()
}
// 点击 time-picker 外部，time-spinner 消失
onClickOutside(timePicker, () => {
  if (props.disabled || props.readonly) return;
  isShow.value = false;
});


type itemType = {
  text: number,
  selected: boolean,
  disabled: boolean
}
const handlePickerClick = (
  type: "start" | "end",
  timetype: "hour" | "minute" | "second",
  item: itemType,  // time-spinner 的一个item的信息
  scrollFn: Function) => { // 选择后移动滚动条的位置

  const RowColIdx = timetype === "hour" ? 0 : timetype === "minute" ? 1 : 2;
  let emitVal = null; // 更新的值

  // 点击开始时间项
  if (type === "start") {
    const start = fill(deepCopy(state.startValue));
    start[RowColIdx] = item.text;
    const startVal = getValue(start); // 格式化后的时间
    if (isRange.value) {
      // 当切换开始值大于结束值时，结束值自动取开始值
      if (compareArrJoined(start, state.endValue)) {
        const endVal = deepCopy(startVal);
        emitVal = [startVal, endVal];
        nextTick(() => endPicker.value!.resetScroll(start));
      } else {
        emitVal = [startVal, getValue(state.endValue)];
      }
    } else {
      emitVal = startVal;
    }
  }
  // 点击结束时间项
  if (type === "end") {
    const start = fill(deepCopy(state.startValue));
    const end = fill(deepCopy(state.endValue));
    end[RowColIdx] = item.text;
    // 结束时间项不能比开始时间小
    if (compareArrJoined(start, end)) return;
    emitVal = [getValue(start), getValue(end)];
  }

  updateCurrentValue(emitVal);
  scrollFn();
  emits("on-change", emitVal);
};

// HH:mm:ss 没有的项置为0
const fill = (arr: any) => {
  for (let i = 0; i < 3; i++) {
    arr[i] = arr[i] || 0;
  }
  return arr;
};

const getValue = (val: any) => {
  return formatOutputValue(val, props.format);
};

// 将 time-spinner 滚动到正确位置
const initEvent = () => {
  nextTick(() => {
    if (startPicker.value) {
      startPicker.value.resetScroll(state.startValue);
    }
    if (endPicker.value) {
      endPicker.value.resetScroll(state.endValue);
    }
  });
};

// 计算inputText的值
const calcInputText = () => {
  const startText = formatOutputValue(state.startValue, props.format);
  if (!isRange.value) {
    state.inputText = startText;
    return;
  }
  const endText = formatOutputValue(state.endValue, props.format);
  state.inputText =
    !startText && !endText ? "" : `${startText}${props.separator}${endText}`;
};

// 更新startValue和endValue值
const updateCurrentValue = (newVal: any) => {
  if (isRange.value) {
    // 时间范围选择
    state.startValue = getCorrectTime(newVal[0]);
    state.endValue = getCorrectTime(newVal[1]);
  } else {
    // 单个时间选择
    state.startValue = getCorrectTime(newVal);
  }
};

// 获取正确的时间
const getCorrectTime = (val: any) => {
  if (!val) return [];
  // 当传递的为字符串时
  if (isString(val)) {
    return pickNumberInString(val).slice(0, 3);
  }
  return []
};

// 提取字符串中的数字
const pickNumberInString = (str: string) => {
  const timeString = str.replace(/[^\d]+/g, ",");
  return (
    timeString
      .split(",")
      .filter((e) => e !== "")
      // 去掉开头的0, 且值控制在合法区域内
      .map((e, i) => withinNum(parseInt(e, 10), 0, i === 0 ? 23 : 59))
  );
};

// 清空
const handleClear = (event: any) => {
  if (props.disabled) return;
  event.stopPropagation();
  isShow.value = false;
  state.inputText = "";
  state.startValue = [];
  state.endValue = [];
  emits("on-clear");
};

// 确认
const handleConfirm = () => {
  isShow.value = false;
  const emitVal = getEmitValue();
  emits("on-confirm", emitVal);
};

// 触发emit事件应该派发的值
const getEmitValue = () => {
  return isRange.value
    ? [getValue(state.startValue), getValue(state.endValue)]
    : getValue(state.startValue);
};
</script>

<script lang="ts">
export default {
  name: "ZTimePicker",
};
</script>
