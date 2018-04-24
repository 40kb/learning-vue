// step1 - 定义路由组件（一般情况从其它文件 import 进来）
const Foo = {
  template: '<div>foo</div>'
}

// step2 - 定义路由（一般情况从其它文件 import 进来）
const routes = [
  {
    path: '/foo',
    component: Foo
  }
]

// step3 - 创建路由实例
const router = new VueRouter({
  routes
})

// step4 - 挂载到 vue 实例
const app = new Vue({
  router
}).$mount('#app')