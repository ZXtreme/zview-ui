<template>
  <div class="demo-popover">
    <z-popover trigger="click" placement="bottom">
      <div class="demo-tree">
        <z-empty />
      </div>
      <template #reference>
        <z-button size="medium">click激活</z-button>
      </template>
    </z-popover>
  </div>
</template>