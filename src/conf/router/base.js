const routerList = [];

// 默认 404
routerList.push({
  path: '*',
  name: 'notFound',
  component: (resolve) => {
    require(['../../page/404/404.vue'], resolve);
  },
});

export default routerList;
