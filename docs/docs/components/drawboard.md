<script setup>
  import basic from 'exam/drawboard/basic.vue'
  import resize from 'exam/drawboard/resize.vue'
  import save from 'exam/drawboard/save.vue'
  import reserveColor from 'exam/drawboard/reserveColor.vue'

</script>

# Drawboard 画板

用于涂鸦的画板。

## 基础用法

在画板上进行任意绘制操作，可随时调节线条、橡皮擦、背景。
::: code drawboard/basic
<basic></basic>
:::

## 设置大小

可设置画板的大小。
::: code drawboard/resize
<resize></resize>
:::

## 保存功能
画板上绘制完毕后，可将绘制的内容保存为图片，并可自定义保存的图片格式和图片名称。
::: code drawboard/save
<save></save>
:::

## 保留图片背景色
保存为图片时，可选择是否需要保留画板的背景色。
::: tip
若保存的图片格式为 `image/jpeg` ，则不支持不保留背景色，默认为黑色
:::

::: code drawboard/reserveColor
<reserveColor></reserveColor>
:::

## API

### 属性

| 属性名                 | 说明                                    | 类型      | 可选值                                    | 默认值    |
| ---------------------- | --------------------------------------- | --------- | ----------------------------------------- | --------- |
| width                  | 画板宽度，单位 px                       | `string`  | -                                         | 500       |
| height                 | 画板高度，单位 px                       | `string`  | -                                         | 500       |
| backgroundColor        | 画板背景色，不支持颜色名称(如：black)   | `string`  | -                                         | #fff      |
| lineColor              | 画笔线条颜色，不支持颜色名称(如：black) | `string`  | -                                         | #000      |
| lineWidth              | 画笔线条宽度                            | `number`  | [1, 32] 范围内的整数                      | 3         |
| eraserWidth            | 橡皮擦大小                              | `number`  | [3, 48] 范围内的整数                      | 15        |
| isSave                 | 是否具有保存功能                        | `boolean` | -                                         | false     |
| reserveBackgroundColor | 保存时是否保留背景色，jpeg 格式不支持   | `boolean` | -                                         | false     |
| pictureName            | 保存的图片名称                          | `string`  | -                                         | drawboard |
| pictureFormat          | 保存图片的格式                          | `string`  | `image/png` / `image/jpeg` / `image/webp` | image/png |

