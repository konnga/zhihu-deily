<style lang="less">
  .carousel-item {
    img {
      opacity: .8;
    }
    .carousel-text::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 2px;
      background: rgb(255, 208, 75);
    }
  }
  .z-card-title {
    padding: 20px;
    font-size: 24px;
    color: #5b7492;
    text-align: justify;
  }
</style>

<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-text="玩命加载中..."
  >
    <el-carousel
      height="400px"
      :autoplay="false"
      :interval="4000"
    >
      <el-carousel-item
        class="carousel-item"
        v-for="items in carouselList"
        :key="items.id"
        >
        <img-card
          :id="items.id"
          :imgUrl="items.image"
          :title="items.title"
        >
        </img-card>
      </el-carousel-item>
    </el-carousel>
    <z-card
      @click.native="handleCardClick(item.id)"
      v-for="item in daysData"
      :key="item.id"
      :imgUrl="item.images[0]"
      :title="item.title"
      mode="horizontal"
    >
    </z-card>
  </div>
</template>

<script>
import { Row, Col, Carousel, CarouselItem } from 'element-ui';
import moment from 'moment';
import indexApi from 'api@/index-api';
import { ZCard, imgCard } from '../../components/z-card';

export default {
  name: 'Main',
  components: {
    ZCard,
    imgCard,
    [Row.name]: Row,
    [Row.name]: Col,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
  data() {
    return {
      daysData: [],
      carouselList: [],
      loading: true,
    };
  },
  created() {
    this.fetchList();
  },
  methods: {
    getCarouselNews() {
      indexApi.getCarouselNewsList().then((res) => {
        this.carouselList = res.top_stories;
      });
    },
    fetchList() {
      this.getCarouselNews();
      indexApi.getIndexList(moment(new Date()).format('YYYYMMDD')).then((res) => {
        this.daysData = res.stories;
        this.$store.dispatch('menuName', { menuName: '首页' });
        this.loading = false;
      });
    },
    handleCardClick(detailsId) {
      this.$router.push({ name: 'details', query: { id: detailsId } });
    },
  },
};
</script>
