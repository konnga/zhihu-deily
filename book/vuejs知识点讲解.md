# 2. Vue

vue是一套用于构建用户界面的渐进式框架，关注视图层，易于上手。

* ## 单文件组件

>在vue中开发组件可以使用以下方式：

### 全局组件
```html
// 创建根实例
new Vue({
  el: 'App'
})
// 注册组件
Vue.component('helloworld', {
  template: '<div>一个vue全局组件</div>'
})
// 使用组件
<div id="App">
  <helloworld></helloworld>
</div>
```

### 局部注册

局部注册即是在某个组件实例中注册子组件，在父组件中的components属性中配置即可：
```html
var hi = {
  template: '你好'
}
// 注册组件，挂载之后页面将会显示：hi，你好
new Vue('helloWorld', {
  template: <div>hi,<child></child></div>
  components: {
    child: hi
  }
})
```

在实际项目开发中常常使用单文件组件进行开发，单文件组件有固定的模板(style标签可以省略)，以.vue为文件扩展名，vue会自动处理.vue文件扩展名的文件;

以下使用一个hhelloworld.vue组件来详细了解Vue的单文件组件开发：
```html
// 样式部分
<style lang="scss" rel="stylesheet/scss">
  .classNmae {

  }
</style>

// 模板部分
<template>
  <div></div>
</template>

// js部分
<script>
  // import 一些依赖
  import xxxx from 'xxx'
  // 导出组件
  export default {
    // 组件名称
    name: 'helloworld',
    ...
  }
</script>
```
