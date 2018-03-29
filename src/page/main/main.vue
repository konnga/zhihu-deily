<style lang="less">
  .list-container {
    max-width: 960px;
  }
</style>

<template>
  <div>
    首页
    <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000002vOkVg0vI14q.jpg" alt="124">
  </div>
</template>

<script>
import { Row, Col } from 'element-ui';
import indexApi from 'api@/lib/index-api';

export default {
  name: 'Main',
  components: {
    [Row.name]: Row,
    [Row.name]: Col,
  },
  data () {
    return {
      daysData: [],
    }
  },
  created () {
    this.fetchList();
  },
  methods: {
    fetchList () {
      indexApi.getIndexList('20180318').then((res) => {
        this.daysData = res;
        console.log(this.daysData);
      });
    },
  },
};
</script>
