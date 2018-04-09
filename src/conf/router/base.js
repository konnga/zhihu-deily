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
