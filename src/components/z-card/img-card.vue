<style lang="less">
  .img-card {
    position: relative;
    width: 100%;
    height: 100%;
    .text {
      position: absolute;
      right: 0;
      bottom: 20%;
      background: rgba(91, 116, 146, .5);
      color: #fff;
      padding: 20px;
      font-weight: 600;
      font-size: 28px;
      border-radius: 20px 0 0 20px;
    }
  }
</style>

<template>
  <div
    @click="handleClick"
    class="img-card"
    v-if="imgUrl"
  >
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
    id: {
      required: true,
      type: Number,
      default: 0,
    },
    imgUrl: {
      required: true,
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
      required: true,
      type: String,
      default: 'img',
    },
  },
  methods: {
    handleClick() {
      if (this.id) {
        this.$router.push({name: 'details', query: { id: this.id }})
      }
    }
  }
};
</script>

