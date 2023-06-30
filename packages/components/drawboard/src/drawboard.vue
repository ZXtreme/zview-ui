<template>
  <div class="z-board" :style="boardStyle">
    <Scrollbar>
      <div class="z-board-item1">
        <Button type="primary" plain ref="eraseBtn" @click="eraserMode = !eraserMode">
          {{ eraserMode ? "画笔" : "橡皮" }}
        </Button>
        <Button type="primary" plain ref="undoBtn" @click="undo">回退</Button>
        <Button type="primary" plain ref="clearBtn" @click="clear">清空</Button>
        <Button type="primary" plain v-if="isSave" id="save-btn" ref="saveBtn" @click="save">保存</Button>
        <Button type="primary" plain @click="status = 0">橡皮大小</Button>
        <Button type="primary" plain @click="status = 1">线条颜色</Button>
        <Button type="primary" plain @click="status = 2">线条宽度</Button>
        <Button type="primary" plain @click="status = 3">背景颜色</Button>
      </div>
    </Scrollbar>
    <div v-if="status === 0" class="z-board-item2">
      <Button type="primary" plain class="z-item2-right">橡皮大小</Button>
      <Slider v-model="eraserWidth" show-input @change="updateEraserWidth" @input="updateEraserWidth" :min="3"
        :max="48" />
    </div>
    <div v-if="status === 1" class="z-board-item2">
      <Button type="primary" plain class="z-item2-right">线条颜色</Button>
      <input type="color" v-model="lineColor" class="z-board-color-picker" />
    </div>
    <div v-if="status === 2" class="z-board-item2">
      <Button type="primary" plain class="z-item2-right">线条宽度</Button>
      <Slider v-model="lineWidth" show-input @change="updateLineWidth" @input="updateLineWidth" :min="1" :max="32" />
    </div>
    <div v-if="status === 3" class="z-board-item2">
      <Button type="primary" plain class="z-item2-right">背景颜色</Button>
      <input type="color" v-model="backgroundColor" class="z-board-color-picker" />
    </div>
    <Divider style="margin: 5px 0" />
    <canvas id="canvas" ref="canvas" :width="width" :height="height" @mousemove="draw" @mouseup="mouseup"
      @mouseout="mouseout" @mousedown="mousedown" :style="canvasStyle"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { DrawboardProps } from "./drawboard";
import Button from "../../button";
import Scrollbar from "../../scrollbar";
import Slider from "../../slider";
import Divider from "../../divider";

const props = defineProps(DrawboardProps);

// 获取canvas元素和按钮
const canvas = ref<null | HTMLCanvasElement>(null)
let ctx: null | CanvasRenderingContext2D = null
onMounted(() => {
  ctx = canvas.value!.getContext('2d');
})

const updateLineWidth = (val: number) => {
  lineWidth.value = val
}
const updateEraserWidth = (val: number) => {
  eraserWidth.value = val
}

const lineColor = ref<string>("")
const backgroundColor = ref<string>("")
const eraserWidth = ref<number>(0)
const lineWidth = ref<number>(0)
const status = ref(0) // 详细选项框中展示哪个选项详情
const isDrawing = ref(false); // 是否正在绘画
let lastX = 0;
let lastY = 0;
const eraserMode = ref(false);
const strokeHistory: string[] = []; // 用于保存笔画历史

const boardStyle = computed(() => {
  return {
    width: props.width + 'px'
  }
})

const canvasStyle = computed(() => {
  return {
    cursor: eraserMode.value ?
      `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="none" stroke="%23000" stroke-width="2"/><circle cx="16" cy="16" r="2" fill="black"/></svg>') 16 16, auto`
      : "crosshair",
    backgroundColor: backgroundColor.value
  }
})

// 绘制函数
const draw = (e: MouseEvent) => {
  if (!isDrawing.value) return;
  ctx!.beginPath();
  if (eraserMode.value) {
    ctx!.clearRect(e.offsetX - eraserWidth.value / 2,
      e.offsetY - eraserWidth.value / 2, eraserWidth.value, eraserWidth.value);
  } else {
    ctx!.strokeStyle = lineColor.value;
    ctx!.lineWidth = lineWidth.value;
    ctx!.lineCap = 'round' // 设置线首端和末端的形状，butt(默认，方形)/round/square
    ctx!.lineJoin = 'round' // 设置线间结合的形状，miter(默认，尖角)/round/bevel(斜角)
    ctx!.moveTo(lastX, lastY);
    ctx!.lineTo(e.offsetX, e.offsetY);
    ctx!.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
}

// 保存笔画历史
const storeStroke = () => {
  strokeHistory.push(canvas.value!.toDataURL());
}

// 回退函数
const undo = () => {
  if (strokeHistory.length > 1) {
    strokeHistory.pop(); // 删除最后一笔
    let lastStroke = new Image();
    lastStroke.src = strokeHistory[strokeHistory.length - 1];
    lastStroke.onload = () => {
      ctx!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
      ctx!.drawImage(lastStroke, 0, 0);
    };
  } else {
    ctx!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
    strokeHistory.length = 0  // 防止 strokeHistory.length === 1 时记录没有被清除掉
  }
}

// 清空函数
const clear = () => {
  ctx!.clearRect(0, 0, canvas.value!.width, canvas.value!.height); // 清空画布
  storeStroke()
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
    lastStroke.src = strokeHistory[strokeHistory.length - 1];
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

  const a = document.createElement("a");
  a.href = url;
  a.download = props.pictureName
  a.target = "_blank";
  a.click()
}

const mousedown = (e: MouseEvent) => {
  isDrawing.value = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
};

const mouseup = (e: MouseEvent) => {
  isDrawing.value = false
  storeStroke(); // 保存笔画历史
}

const mouseout = (e: MouseEvent) => {
  if (isDrawing.value) mouseup(e)
}

const update = () => {
  lineColor.value = props.lineColor
  backgroundColor.value = props.backgroundColor
  eraserWidth.value = props.eraserWidth
  lineWidth.value = props.lineWidth
}

watch([
  () => props.backgroundColor,
  () => props.lineColor,
  () => props.lineWidth,
  () => props.eraserWidth,
], () => {
  update()
}, {
  immediate: true
})


</script>

<script lang="ts">
export default {
  name: "ZDrawboard",
};
</script>
