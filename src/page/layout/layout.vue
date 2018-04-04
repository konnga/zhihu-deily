<style lang="less">
  .layout {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    background-color: rgba(249, 250, 255, 100);
    .active-btn-wrapper {
      position: fixed;
      z-index: 1002;
      width: 100%;
      padding: 20px;
      color: rgb(255, 208, 75);
      height: 1.5rem;
      background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.51) 95%);
      cursor: pointer;
      i {
        font-size: 32px;
      }
    }
    &-menu {
      visibility: hidden;
    }
    &-menu-active {
      visibility: visible;
      .layout-menu-bar_wrap_menu {
        transform: translate(0);
      }
    }
    &-content {
      max-width: 960px;
      margin: 0 auto;
    }
  }
</style>

<template>
  <div class="layout">
    <div class="active-btn-wrapper" @click="handleMenuActive">
      <i :class="[isActive ? 'el-icon-circle-close' : 'el-icon-circle-plus' ]"></i>
    </div>
    <div :class="['layout-menu', isActive ? 'layout-menu-active' : '']">
      <menu-bar></menu-bar>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
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
      isActive: false,
    };
  },
  methods: {
    handleMenuActive() {
      console.log(this.$store.state);
      this.isActive = !this.isActive;
    },
  },
};
</script>
