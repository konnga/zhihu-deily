import axios from 'axios';

// 公共api
const commApi = axios.create({
  baseURL: '/readapi/api',
});

// newsApi响应拦截
const newsResponesInter = (response) => {
  let data;
  if (response.status === 200 && response.statusText === 'OK') {
    data = response.data;
  }
  return data;
};

// newsApi请求拦截
const newsRquestInter = (error) => {
  return Promise.reject(`网络异常: ${error}`);
};

commApi.interceptors.response.use(newsResponesInter, newsRquestInter);

export default commApi;
