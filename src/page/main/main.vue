<style lang="less">
  .list-container {
    max-width: 960px;
  }
</style>

<template>
  <div>
    首页
  </div>
</template>

<script>
  import { Row, Col } from 'element-ui';
  
  export default {
    name: 'main',
    components: {
      [Row.name]: Row,
      [Row.name]: Col
    }
  }
</script>
