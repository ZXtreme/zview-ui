<template>
  <div class="Container">
    <div class="row center">
      <z-tooltip class="box-item" content="top-start" placement="top-start">
        <z-button type="default" plain>top-start</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="top" placement="top">
        <z-button type="default" plain>top</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="top-end" placement="top-end">
        <z-button type="default" plain>top-end</z-button>
      </z-tooltip>
    </div>
    <div class="row">
      <z-tooltip class="box-item" content="left-start" placement="left-start">
        <z-button type="default" plain>left-start</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="right-start" placement="right-start">
        <z-button type="default" plain>right-start</z-button>
      </z-tooltip>
    </div>
    <div class="row">
      <z-tooltip class="box-item" content="left" placement="left">
        <z-button type="default" plain>left</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="right" placement="right">
        <z-button type="default" plain>right</z-button>
      </z-tooltip>
    </div>
    <div class="row">
      <z-tooltip class="box-item" content="left-end" placement="left-end">
        <z-button type="default" plain>left-end</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="right-end" placement="right-end">
        <z-button type="default" plain>right-end</z-button>
      </z-tooltip>
    </div>
    <div class="row center">
      <z-tooltip class="box-item" content="bottom-start" placement="bottom-start">
        <z-button type="default" plain>bottom-start</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="bottom" placement="bottom">
        <z-button type="default" plain>bottom</z-button>
      </z-tooltip>
      <z-tooltip class="box-item" content="bottom-end" placement="bottom-end">
        <z-button type="default" plain>bottom-end</z-button>
      </z-tooltip>
    </div>
  </div>
</template>

<style>
.Container {
  width: 500px;
}

.Container .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Container .center {
  justify-content: center;
}

.Container .box-item {
  margin: 10px;
}
</style>
