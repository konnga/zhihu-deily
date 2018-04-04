<style lang="less">
  .list-container {
    max-width: 960px;
  }
  .carousel-text {
    position: absolute;
    bottom: 20%;
    right: 2%;
    color: #fff;
    padding: 20px;
    font-weight: 600;
    font-size: 28px;
  }
  .carousel-text::after {
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    background: rgb(255, 208, 75);
  }
</style>

<template>
  <div>
    <el-carousel
      height="400px"
      :autoplay="false"
      :interval="4000"
    >
      <el-carousel-item
        v-for="(items) in carouselList"
        :key="items.id"
        >
        <div>
          <img
            :src="items.images[0]"
            :alt="items.title"
            width="100%"
            height="400px"
          />
          <span class="carousel-text">{{items.title}}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
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
import { Row, Col, Carousel, CarouselItem } from 'element-ui';
import indexApi from 'api@/index-api';
import ZCard from '../../components/z-card';
import moment from 'moment';

export default {
  name: 'Main',
  components: {
    ZCard,
    [Row.name]: Row,
    [Row.name]: Col,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
  data () {
    return {
      daysData: [],
      carouselList: [],
    }
  },
  created () {
    this.fetchList();
  },
  methods: {
    fetchList () {
      indexApi.getIndexList(moment(new Date()).format('YYYYMMDD')).then((res) => {
        this.daysData = res.stories;
        this.carouselList = this.daysData.filter((item, index) => {
            return index < 6 ? item : ''
        })
        console.log(this.daysData);
      });
    },
  },
};
</script>
