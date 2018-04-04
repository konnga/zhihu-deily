<style lang="less">
  .layout-menu-bar {
    position: fixed;
    z-index: 101;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    &_wrap_menu {
        padding-top: 4%;
        float: left;
        width: 30%;
        height: 100%;
        border: none;
        transform: translate(-100%);
        transition: transform .3s ease;
        .layout-menu-item {
          text-align: left;
          height: 46px;
          padding: 0 50px;
          line-height: 46px;
          .arrow-wrapper {
            float: right;
          }
        }
      }
    .layout-cover {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 1;
      background: rgba(172,185,201,.4);
      transition: opacity .3s ease;
    }
  }
</style>

<template>
  <div class="layout-menu-bar">
    <el-menu
      class="layout-menu-bar_wrap_menu"
      mode="vertical"
      :default-active="activeMenu"
      background-color="#2d6ac5"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link
        :key="item.path"
        :to="item.path"
        v-for="item in menuData"
      >
        <el-menu-item :index="item.path" class="layout-menu-item">
          {{ item.name }} <span v-if="$route.path === item.path" class="arrow-wrapper"><i class="el-icon-d-arrow-right"></i></span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <div class="layout-cover"></div>
  </div>
</template>

<script>
import { Row, Col, Menu, MenuItem } from 'element-ui';
import enums from '../../../common/js/enums';

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
      menuData: enums.menu,
      activeMenu: '/',
    };
  },
  created () {
    console.log(this.$route);
    console.log(enums);
  }
};
</script>
