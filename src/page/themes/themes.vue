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
  <div>
    <img-card
      :imgUrl="themesData.image"
      :title="themesData.description"
    >
    </img-card>
    <z-card
      @click.native="handleCardClick(item.id)"
      v-for="item in themesData.stories"
      :key="item.id"
      :imgUrl="item.images ? item.images[0] : '' "
      :title="item.title"
      mode="horizontal"
    >
    </z-card>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui';
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
  },
  data() {
    return {
      themesData: [],
      carouselList: [],
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
      indexApi.getThemesById(this.$route.query.id).then((res) => {
        this.themesData = res;
      });
    },
    handleCardClick(articlesId) {
      this.$router.push({ name: 'articles', query: { id: articlesId } });
    },
  },
};
</script>
