<template>
  <div :class="['z-timeaxis', single ? 'z-timeaxis-single' : '']" ref="timeaxis" :style="shellStyle">
    <div class="header" v-if="$slots['header']">
      <slot name="header"></slot>
    </div>
    <div class="timeline">
      <div v-for="(item, index) in timeAxisItems" :class="['z-timeaxis-item', activeIdx === index ? 'item--active' : '']"
        :data-text="item.title">
        <div class="content">
          <img class="img" :src="item.src" />
          <h2 class="content-title">{{ item.time }}</h2>
          <p class="content-desc">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="footer" v-if="$slots['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { TimeAxisProps } from "./time-axis";
import { throttle } from "lodash-es";
import { offsetTop } from "@zview-plus/utils"
const props = defineProps(TimeAxisProps);
const timeaxis = ref<null | HTMLDivElement>(null)

const activeIdx = ref(0)
const shellStyle = computed(() => {
  return {
    backgroundImage: `url(${props.timeAxisItems[activeIdx.value].src})`
  }
})

let shellItems: NodeListOf<HTMLDivElement>

const timeaxisScroll = throttle(() => {
  let pos = window.pageYOffset
  const length = shellItems.length
  let targetIdx = 0
  const windowHeight = window.innerHeight

  for (let i = 0; i < length; i++) {
    const item = shellItems[i]
    const min = offsetTop(item)

    if (min <= pos + windowHeight / 3) {
      targetIdx = i
    } else {
      break
    }
  }
  activeIdx.value = targetIdx
}, 20)

onMounted(() => {
  shellItems = timeaxis.value!.querySelectorAll(".z-timeaxis-item");
  window.addEventListener("scroll", timeaxisScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", timeaxisScroll)
})

</script>

<script lang="ts">
export default {
  name: "ZTimeAxis"
};
</script>

