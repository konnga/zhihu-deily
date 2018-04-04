import commApi from './fetch';
import zhiApi from './resource';

const api = {};

// 获取轮播图数据
api.getCarouselNewsList = () => {
  const index = new Promise((resolve, reject) => {
    commApi.get(`${zhiApi.news}`).then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return index;
};

// 获取首页列表数据
api.getIndexList = (data) => {
  const index = new Promise((resolve, reject) => {
    commApi.get(`${zhiApi.newsByDate}/${data}`).then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return index;
};

// 查看文章详情
api.getArticleById = (id) => {
  const article = new Promise((resolve, reject) => {
    commApi.get(`${zhiApi.newsById}/${id}`).then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return article;
};

// 获取日报类型
api.getThemesById = (id) => {
  const article = new Promise((resolve, reject) => {
    commApi.get(`${zhiApi.themesById}/${id}`).then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return article;
};

export default api;
