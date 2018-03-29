import axios from 'axios';

// 首页api
export const newsApi = axios.create({
  baseURL: '/readapi/4/news/before/20180318',
});

// 主题日报
export const themesApi = axios.create({
  baseURL: '/readapi?uri=https://news-at.zhihu.com/api/4/themes',
});

// newsApi响应拦截
const newsResponesInter = (res) => {
  console.log(res);
  return {
    data: res,
  };
};

// newsApi请求拦截
const newsRquestInter = (error) => {
  return Promise.reject(`网络异常: ${error}`);
};

newsApi.interceptors.response.use(newsResponesInter, newsRquestInter);
