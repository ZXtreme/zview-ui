<script setup>
  import basic from 'exam/signature/basic.vue'
  import selectColor from 'exam/signature/selectColor.vue'
  import selectLineWidth from 'exam/signature/selectLineWidth.vue'
  import selectBackgroundColor from 'exam/signature/selectBackgroundColor.vue'
</script>

# Signature 签名

用于签名场景的组件，基于 Canvas 实现。

## 基础用法

当点击确认按钮时，组件会触发 submit 事件，事件的第一个参数为 data，包含以下字段：
1. `image`：签名对应的图片，为 base64 字符串格式。若签名为空，则返回空字符串。
2. `canvas`：Canvas 元素。

::: code signature/basic
<basic></basic>
:::

## 自定义颜色
通过 `lineColor` 来自定义笔触颜色。
::: code signature/selectColor
<selectColor></selectColor>
:::

## 自定义线宽
通过 `lineWidth` 来自定义线条宽度。
::: code signature/selectLineWidth
<selectLineWidth></selectLineWidth>
:::

## 自定义背景颜色
通过 `backgroundColor` 来自定义背景颜色。
::: tip
若保存的图片格式为 `image/jpeg` ，则不支持不保留背景色，默认为黑色
:::

::: code signature/selectBackgroundColor
<selectBackgroundColor></selectBackgroundColor>
:::

## API

### 属性

| 属性名                 | 说明                                    | 类型      | 可选值                                    | 默认值    |
| ---------------------- | --------------------------------------- | --------- | ----------------------------------------- | --------- |
| backgroundColor        | 画板背景色，不支持颜色名称(如：black)   | `string`  | -                                         | -         |
| lineColor              | 画笔线条颜色，不支持颜色名称(如：black) | `string`  | -                                         | #000      |
| lineWidth              | 画笔线条宽度                            | `number`  | [1, 32] 范围内的整数                      | 3         |
| reserveBackgroundColor | 保存时是否保留背景色，jpeg 格式不支持   | `boolean` | -                                         | true      |
| pictureFormat          | 保存图片的格式                          | `string`  | `image/png` / `image/jpeg` / `image/webp` | image/png |
| clear                  | 清除按钮文案                            | `string`  | -                                         | 清空      |
| confirm                | 确认按钮文案                            | `string`  | -                                         | 确认      |

### 事件

| 事件名 | 说明               | 参数                                                 |
| ------ | ------------------ | ---------------------------------------------------- |
| start  | 开始签名时触发     | -                                                    |
| end    | 结束签名时触发     | -                                                    |
| submit | 点击确定按钮时触发 | `data: { image: string; canvas: HTMLCanvasElement }` |
| clear  | 点击取消按钮时触发 | -                                                    |

