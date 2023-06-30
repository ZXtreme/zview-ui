<template>
  <div class="container">
    <div class="item">
      <z-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
        <template #extra>
          <z-button type="primary">Back</z-button>
        </template>
      </z-result>
    </div>
    <div class="item">
      <z-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
        <template #extra>
          <z-button type="primary">Back</z-button>
        </template>
      </z-result>
    </div>
    <div class="item">
      <z-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
        <template #extra>
          <z-button type="primary">Back</z-button>
        </template>
      </z-result>
    </div>
    <div class="item">
      <z-result icon="info" title="Info Tip" sub-title="Using slot as subtitle">
        <template #extra>
          <z-button type="primary">Back</z-button>
        </template>
      </z-result>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .item {
    width: 45%;
  }
}
</style>
