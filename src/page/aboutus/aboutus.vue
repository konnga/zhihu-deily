<style lang="less">
  .aboutus {
    margin: 0 auto;
    text-align: center;
    &_content {
      margin-top: 2rem;
      padding: 24px;
      background: #f7f7f7;
      border-radius: 4px;
      border: 1px solid #ddd;
      .back-index {
        text-decoration: none;
        color: rgb(21, 189, 240);
      }
    }
  }
</style>

<template>
  <div class="aboutus">
    <el-row
      type="flex"
      align="middle"
      justify="center"
    >
      <el-col
        :span="8"
        :xs="24"
        :sm="12"
        :md="10"
        :lg="8"
        class="aboutus_content"
      >
      <h3>你好...</h3>
      <p>这是一个用Vue开发的简单的知乎日报~</p>
      <p>&#8595;</p>
      <div><router-link to="/" active-class="back-index" >回去</router-link></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui';

export default {
  name: 'aboutus',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
};
</script>
