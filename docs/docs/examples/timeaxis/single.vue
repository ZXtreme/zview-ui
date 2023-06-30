<template>
  <z-time-axis :timeAxisItems="items" single></z-time-axis>
</template>

<script setup lang="ts">
import { ref } from "vue";
const items = ref([{
  time: 2000,
  title: "《舞！舞！舞！》",
  content: "你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活。你要听话，不是所有的鱼都会生活在同一片海里。",
  src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
}, {
  time: 2001,
  title: "《你的孤独，虽败犹荣》",
  content: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。",
  src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
}, {
  time: 2002,
  title: "《萤火之森》",
  content: "如果时光可以倒流，我还是会选择认识你，虽然会伤痕累累，但是心中的温暖记忆是谁都无法给予的。谢谢你来过我的世界。",
  src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
}])
</script>
