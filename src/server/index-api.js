import { newsApi } from './fetch';


const api = {};

api.getIndexList = (data) => {
  const index = new Promise((resolve, reject) => {
    newsApi.get(`/${data}`).then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return index;
};

export default api;
