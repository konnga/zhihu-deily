import axios from 'axios';

// 首页api
export const newsApi = axios.create({
  baseURL: '/readapi/api/4/news/before',
});

// 主题日报
export const themesApi = axios.create({
  baseURL: '/readapi?uri=https://news-at.zhihu.com/api/4/themes',
});

// newsApi响应拦截
const newsResponesInter = (response) => {
  if (response.status === 200 && response.statusText === 'OK') {
    return response.data;
  }
};

// newsApi请求拦截
const newsRquestInter = (error) => {
  return Promise.reject(`网络异常: ${error}`);
};

newsApi.interceptors.response.use(newsResponesInter, newsRquestInter);
