<style lang="less">
  .details {
    .details-title {
      .text {
      }
    }
    .details-content {
      overflow: hidden;
      padding: 5%;
      .question {
        .question-title {
          font-size: 22px;
          color: #5b7492;
        }
        .answer {
          .content {
            font-size: 18px;
            p {
              text-align: justify !important;
            }
            img {
              width: 90%;
            }
          }
          .meta {
            .author {
              color: #fc4482;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="details">
    <img-card
      class="details-title"
      :imgUrl="articleDatas.image"
      :title="articleDatas.title"
    >
    </img-card>
    <div class="details-content" v-html="articleDatas.body"></div>
  </div>
</template>

<script>
import indexApi from 'api@/index-api';
import { Row, Col, Loading } from 'element-ui';
import { imgCard } from '../../components/z-card';

export default {
  name: 'detailss',
  components: {
    imgCard,
    [Row.name]: Row,
    [Row.name]: Col,
  },
  data() {
    return {
      articleDatas: {},
    };
  },
  created() {
    this.getArticleDetails();
  },
  methods: {
    getArticleDetails() {
      const loader =  Loading.service(
        { 
          background: '#ddd',
          fullscreen: true,
          text: '加载中...'
        }
      );
      indexApi.getArticleById(this.$route.query.id).then((res) => {
        this.articleDatas = res;
        loader.close();
      });
    },
  },
};
</script>
