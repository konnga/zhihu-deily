<style lang="less">
  .layout {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    background-color: rgba(249, 250, 255, 100);
    .active-btn-wrapper {
      display: flex;
      justify-content: flex-start;
      position: fixed;
      z-index: 1002;
      width: 100%;
      margin: 5px 0 0 20px;
      color: rgb(255, 208, 75);
      height: 1.5rem;
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
      &-title {
        background: #5b7492;
        color: rgb(255, 208, 75);
        text-align: center;
        font-size: 2rem; 
        .time {
          font-size: 1rem;
        }
      }
    }
  }
</style>

<template>
  <div class="layout">
    <div class="active-btn-wrapper">
      <div>
        <i v-if="this.$route.path.includes('details')" class="el-icon-arrow-left" @click="handleBack"></i>
        <i v-else :class="[isActive ? 'el-icon-circle-close' : 'el-icon-circle-plus']" @click="handleMenuActive"></i>
      </div>
    </div>
    <div :class="['layout-menu', isActive ? 'layout-menu-active' : '']">
      <menu-bar @menuSelect="handleMenuActive">
      </menu-bar>
    </div>
    <div class="layout-content">
      <div v-show="hidePath" class="layout-content-title">{{menuName}}<span class="time">{{days}}</span></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Row, Col, Menu, MenuItem } from 'element-ui';
import moment from 'moment';
import MenuBar from './menu-bar/menu-bar';
import enums from '../../common/js/enums'

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
      days: '',
      activeMenu: '/',
      isActive: false,
    };
  },
  computed: {
    hidePath() {
      const isHide = enums.hidePath.some((item) => {
        return this.$route.path.includes(item)
      })
      return !isHide;
    },
    menuName() {
      return this.$store.state.app.menuName;
    }
  },
  created() {
    this.days = moment(new Date()).format('YYYY/MM/DD');
  },
  methods: {
    handleMenuActive() {
      this.isActive = !this.isActive;
    },
    handleBack() {
      this.$router.back();
    },
  },
};
</script>
