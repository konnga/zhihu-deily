<style lang="less">
  .list-container {
    max-width: 960px;
  }
</style>

<template>
  <div>
    <z-card
      v-for="item in daysData"
      :key="item.id"
      :imgUrl="item.images[0]"
      :title="item.title"
    >
    </z-card>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui';
import indexApi from 'api@/index-api';
import ZCard from '../../components/z-card';
import moment from 'moment';

export default {
  name: 'Main',
  components: {
    ZCard,
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
      indexApi.getIndexList(moment(new Date()).format('YYYYMMDD')).then((res) => {
        this.daysData = res.stories;
        console.log(this.daysData);
      });
    },
  },
};
</script>
