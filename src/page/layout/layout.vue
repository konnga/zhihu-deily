<style lang="less">
  .layout {
    &_content {
      max-width: 960px;
      margin: 0 auto;
    }
  }
</style>

<template>
  <div class="layout">
    <div>
      <menu-bar></menu-bar>
    </div>
    <el-row type="flex" justify="center" class="layout_content">
      <el-col :span="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col, Menu, MenuItem } from 'element-ui';
import MenuBar from './menu-bar/menu-bar';


export default {
  name: 'layout',
  components: {
    MenuBar,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  data() {
    return {
      activeMenu: '/',
    };
  },
};
</script>
