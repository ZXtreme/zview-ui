<script setup>
import basic from 'exam/timeaxis/basic.vue'
import single from 'exam/timeaxis/single.vue'
import custom from 'exam/timeaxis/custom.vue'
</script>

# TimeAxis 时间轴

垂直展示时间序列，附带标题和内容。

## 基础用法

传入一个数组，每个元素为一个包含时间、标题、内容和图片地址的对象，展示为双侧时间轴。

::: code timeaxis/basic
<basic></basic>
:::

## 单时间轴

可设置 single 属性将时间轴设置为单轴。 

::: code timeaxis/single
<single></single>
:::

## 自定义头部和尾部

可以设置时间轴的 header 和 footer

::: code timeaxis/custom
<custom></custom>
:::


## API

### 属性

| 参数          | 说明           | 类型      | 默认值 |
| ------------- | -------------- | --------- | ------ |
| timeAxisItems | 时间轴展示内容 | `array`   | []     |
| single        | 单时间轴       | `boolean` | false  |
