<template>
  <div class="z-signature">
    <div class="z-signature__content">
      <canvas id="canvas" ref="canvas" @mousedown="mousedown" @mouseout="mouseup" :style="canvasStyle">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
    <div class="z-signature__footer">
      <z-button @click="clear">{{ props.clear }}</z-button>
      <z-button @click="save">{{ props.confirm }}</z-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { SignatureProps } from "./signature";
import ZButton from "../../button";

const props = defineProps(SignatureProps);
const emit = defineEmits(['submit', 'clear', 'start', 'end'])

// 获取canvas元素和按钮
const canvas = ref<null | HTMLCanvasElement>(null)
let ctx: null | CanvasRenderingContext2D = null

onMounted(() => {
  canvas.value!.width = canvas.value!.clientWidth
  canvas.value!.height = canvas.value!.clientHeight

  ctx = canvas.value!.getContext('2d');
  ctx!.strokeStyle = props.lineColor
  ctx!.lineWidth = props.lineWidth
  ctx!.lineCap = 'round' // 设置线首端和末端的形状，butt(默认，方形)/round/square
  ctx!.lineJoin = 'round' // 设置线间结合的形状，miter(默认，尖角)/round/bevel(斜角)
})

const backgroundColor = ref<string>(props.backgroundColor ?? "")
let lastX: number, lastY: number

const canvasStyle = computed(() => {
  return {
    backgroundColor: backgroundColor.value
  }
})

// 绘制函数
const draw = (e: MouseEvent) => {
  ctx!.beginPath();
  ctx!.moveTo(lastX, lastY);
  ctx!.lineTo(e.offsetX, e.offsetY);
  ctx!.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}


// 清空函数
const clear = () => {
  ctx!.clearRect(0, 0, canvas.value!.width, canvas.value!.height); // 清空画布
  emit('clear')
}

const getURLWithBackground = async (): Promise<string> => {
  return new Promise(resolve => {
    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = canvas.value!.width
    tempCanvas.height = canvas.value!.height
    const tempCtx = tempCanvas.getContext("2d") as CanvasRenderingContext2D
    tempCtx.fillStyle = backgroundColor.value
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    let lastStroke = new Image();
    lastStroke.src = canvas.value!.toDataURL();
    lastStroke.onload = () => {
      tempCtx!.drawImage(lastStroke, 0, 0);
      resolve(tempCanvas.toDataURL(props.pictureFormat))
    };
  })
}

// 保存函数
const save = async () => {
  let url: string;
  if (props.reserveBackgroundColor) {
    url = await getURLWithBackground();
  } else {
    url = canvas.value!.toDataURL(props.pictureFormat);
  }
  emit('submit', {
    image: url,
    canvas: canvas.value!
  })
}

const mousedown = (e: MouseEvent) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
  canvas.value?.addEventListener('mousemove', draw)
  canvas.value?.addEventListener('mouseup', mouseup)
  emit('start')
};

const mouseup = () => {
  canvas.value?.removeEventListener('mousemove', draw)
  canvas.value?.removeEventListener('mouseup', mouseup)
  emit('end')
}

const update = () => {
  backgroundColor.value = props.backgroundColor ?? ""
  ctx!.strokeStyle = props.lineColor
  ctx!.lineWidth = props.lineWidth
}

watch([
  () => props.backgroundColor,
  () => props.lineColor,
  () => props.lineWidth,
], () => {
  update()
})


</script>

<script lang="ts">
export default {
  name: "ZSignature",
};
</script>