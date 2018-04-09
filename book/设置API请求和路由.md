# 6. 设置API请求和路由

现在我们来处理知乎的API和项目路由。

* ## 6.1 跨域问题

  因为我们的API接口是来自知乎的真实数据，需要进行跨域处理；

  在`/config/index.js`中（该目录及文件是由脚手架生成）,添加如下字段：在这里我们只配置了开发环境下的代理，如需处理生产环境下的跨域，需要使用node.js或者Nginx做代理，这里不错展开，后续再谈。
```javascript
proxyTable: {
  '/readapi': {
    target: 'https://news-at.zhihu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/readapi': '',
    }
  }
},
```
  然后，使用`axios`创建一个实例来统一管理所有的api请求，在`src/server`目录新建`fetch.js`文件，其内容如下：
  `fetch.js:`
```javascript
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
```
* ## 6.2 图片防盗链

  知乎API返回的数据中带有图片URL，我们可以从浏览器访问图片，然而直接在项目中请求图片会返回一个403错误，在获取图片时存在一个图片盗链问题。
  但是没关系，我们只需要简单的处理一下就可以使用了。
  在根目录的`index.html`中的`head`标签中添加一下内容即可：
```html
<meta name="referrer" content="never">
```
  这只是一种处理办法，关于图片防盗链的问题可以去这里查看详细的知识原理：[知乎日报 API的图片盗链问题](https://www.cnblogs.com/dongcanliang/archive/2017/04/01/6655061.html)

* ## 6.3 路由
  现在我们来配置项目的路由，我们先为项目配置一个首页路由，后续随着项目的推进再添加新的路由。

  在`src/conf/router`下新建一个`index.js`和`base.js`文件；

  `base.js:`配置一个404页面，用来处理路由不存在的情况：
```javascript
// 这其中的组件我们还没开发，后续我们再来处理它。
// '*'号字符即是匹配路由不存在的情况。
const routerList = [];

// 默认 404
routerList.push({
  path: '*',
  name: 'notFound',
  component: (resolve) => {
    require(['../../page/404/404.vue'], resolve);
  },
},
{
  path: '/about',
  name: 'about',
  component: (resolve) => {
    require(['../../page/aboutus/aboutus.vue'], resolve);
  },
},
);

export default routerList;
```
  `index.js:` 路由的入口文件
```javascript
import Vue from 'vue';
import Router from 'vue-router';
import _base from './base';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => {
      require(['../../page/layout/layout.vue'], resolve);
    },
  },
].concat(_base);
const router = new Router({ routes });
export default router;
```
  这样，我们的基础路由就配置好了，撒花~

下一节：<a href="./页面的基础布局.md">页面的基础布局</a>
  