<style lang="less">
  .z-card-horizontal {
    display: flex;
    justify-content: start;
  }
  .z-card {
    margin: 10px 0;
    img {
      width: 6rem;
      height: 100%;
    }
  }
</style>

<template>
  <el-card class="z-card">
    <div :class="classes">
      <div class="z-card-img">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="z-card-title" v-if="title">
        {{ title }}
      </div>
      <div class="z-card-content">
        <div v-if="content">{{ content }}</div>
        <slot name="content"></slot>
      </div>
    </div>
  </el-card>
</template>

<script>
import { Card, Row, Col } from 'element-ui';
export default {
  name: 'ZCard',
  components: {
    [Card.name]: Card,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'vertical'
    }
  },
  computed: {
    classes () {
      return `z-card ${this.mode === 'horizontal' ? 'z-card-horizontal' : ''}`;
    }
  },
  methods: {
  },
};
</script>
