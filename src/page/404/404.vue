<style lang="less">
  .not-found {
    margin: 0 auto;
    text-align: center;
    &_title {
      margin-top: 2rem;
      font-weight: 700;
      font-size: 24px;
    }
    &_content {
      padding: 24px;
      background: #f7f7f7;
      border-radius: 4px;
      border: 1px solid #ddd;
      p {
        padding-bottom: 12px;
        border-bottom: 2px solid #ddd;
      }
      .back-index {
        text-decoration: none;
        color: rgb(21, 189, 240);
      }
    }
  }
</style>

<template>
  <div class="not-found">
    <el-row
      class="not-found_title"
      type="flex"
      align="middle"
      justify="center"
    >
      <el-col :span="8">
        404
      </el-col>
    </el-row>
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
        class="not-found_content"
      >
        <h3>你似乎来到了没有知识存在的荒原...</h3>
      <p>来源链接是否正确？用户、话题或问题是否存在？</p>
      <div><router-link to="/" active-class="back-index" >返回首页去吧~</router-link></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui';

export default {
  name: 'notfound',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
};
</script>
