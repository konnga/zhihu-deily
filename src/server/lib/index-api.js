import { newsApi } from './fetch';


const api = {};

api.getIndexList = () => {
  const index = new Promise((resolve, reject) => {
    newsApi.get().then((res) => {
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
  return index;
};

export default api;
