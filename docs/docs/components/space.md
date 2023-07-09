<script setup>
    import basic from 'exam/space/basic.vue'
    import inline from 'exam/space/inline.vue'
    import wrap from 'exam/space/wrap.vue'
    import size from 'exam/space/size.vue'
    import vertical from 'exam/space/vertical.vue'
    import alignment from 'exam/space/alignment.vue'
</script>

# Space 间距

虽然我们拥有 Divider 组件，但很多时候我们需要不是一个被 Divider 组件分割开的页面结构，因此我们会重复的使用很多的 Divider 组件，这在我们的开发效率上造成了一定的困扰。间距组件就是为了解决这种困扰应运而生的。

## 基础用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

::: code space/basic
<basic></basic>
:::

## 垂直布局

默认水平布局方式，我们也提供垂直布局的方式。用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制。

::: code space/vertical
<vertical></vertical>
:::

## inline 元素

可以通过 `inline` 属性设置 Space 组件的容器类型，`inline` 表示容器表现为行内元素，默认时容器表现为块级元素

::: code space/inline
<inline></inline>
:::

## 自定义 Size

很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。`size` 值是一个长度为 1 或 2 的数组，长度为 1 时，数组元素是左右上下的间距(即左右间距和上下间距相同)；长度为 2 时，数组元素依次是左右，上下的间距。

::: code space/size
<size></size>
:::

## 自动换行

在水平布局模式下, 通过控制 `wrap`（布尔类型）来控制是否自动换行

::: code space/wrap
<wrap></wrap>
:::

## 对齐方式

设置 `alignment` 可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致，即 `stretch`、`center`、`flex-start`、`flex-end`、`baseline`、`initial`、`inherit`。

::: code space/alignment
<alignment></alignment>
:::

## API

### 属性
 
| 参数      | 说明                                     | 类型      | 可选值                                                                  | 默认值     |
| --------- | ---------------------------------------- | --------- | ----------------------------------------------------------------------- | ---------- |
| inline    | 容器是否为 inline 元素                   | `boolean` | true / false                                                            | false      |
| direction | 排列的方向                               | `string`  | vertical / horizontal                                                   | horizontal |
| size      | 间隔大小                                 | `array`   | [row, col] / [all]                                                      | [10, 10]   |
| wrap      | 设置是否自动换行                         | `boolean` | true / false                                                            | false      |
| alignment | 所有子节点在容器内部侧轴方向上的对齐方式 | `string`  | stretch / center / flex-start / flex-end / baseline / initial / inherit | center     |