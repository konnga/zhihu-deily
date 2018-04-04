<style lang="less">
  .articles {
    .articles-title {
      .text {
      }
    }
    .articles-content {
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
  <div class="articles">
    <img-card
      class="articles-title"
      :imgUrl="articleDatas.image"
      :title="articleDatas.title"
    >
    </img-card>
    <div class="articles-content" v-html="articleDatas.body"></div>
  </div>
</template>

<script>
import indexApi from 'api@/index-api';
import { Row, Col } from 'element-ui';
import { imgCard } from '../../components/z-card';

export default {
  name: 'article',
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
      indexApi.getArticleById(this.$route.query.id).then((res) => {
        this.articleDatas = res;
      });
    },
  },
};
</script>
