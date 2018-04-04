<style lang="less">
  .img-card {
    position: relative;
    width: 100%;
    height: 100%;
    .text {
      position: absolute;
      right: 0;
      bottom: 20%;
      color: #fff;
      padding: 20px;
      font-weight: 600;
      font-size: 28px;
    }
  }
</style>

<template>
  <div class="img-card">
    <img
      :src="imgUrl"
      :alt="title"
      :width="width"
      :height="height"
    />
    <span class="text">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'imgCard',
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '400px;',
    },
    width: {
      type: String,
      default: '100%',
    },
    title: {
      type: String,
      default: 'img',
    },
  },
};
</script>

