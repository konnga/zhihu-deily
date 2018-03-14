<style lang="less">
  .layout-nav-bar {
    height: 46px;
    padding: 0;
    background-color: #2d6ac5;
    &_wrap {
      margin: 0 auto;
      max-width: 960px;
      &_menu {
        display: flex;
        justify-content: flex-start;
        height: 46px;
        margin: 0 auto;
        border-bottom: none;
        .layout-menu-item {
          height: 46px;
          padding: 0 50px;
          line-height: 46px;
        }
      }
    }
  }
</style>

<template>
  <nav class="layout-nav-bar">
    <el-row
      class="layout-nav-bar_wrap"
      type="flex"
      justify="center"
    >
      <el-col
        :span="8"
        :xs="24"
        :sm="12"
        :md="10"
        :lg="8"
      >
        <el-menu
          class="layout-nav-bar_wrap_menu"
          :default-active="activeMenu"
          mode="horizontal"
          background-color="#2d6ac5"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/">
            <el-menu-item index="/" class="layout-menu-item">
              首页
            </el-menu-item>
          </router-link>
          <router-link to="/themes">
            <el-menu-item index="main" class="layout-menu-item">
              主题日报
            </el-menu-item>
          </router-link>
          <router-link to="/about">
            <el-menu-item index="about" class="layout-menu-item">
              关于
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </nav>
</template>

<script>
import { Row, Col, Menu, MenuItem } from 'element-ui';

export default {
  name: 'MenuBar',
  components: {
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
