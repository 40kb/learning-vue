// navigation guards
const Sidebar = {
  template: `<div>Sidebar.....</div>`,

  // 组件实例创建前
  // 不！能！获取组件实例 `this`
  // 用在哪些场景？
  // 如何获得 `this`?
  beforeRouteEnter(to, from, next) {
    alert('beforeRouteEnter')

    next()
  },

  // 组件被复用时候会调用
  // 可以访问组件实例 `this`
  // 用在哪些场景？
  beforeRouteUpdate(to, from, next) {
    alert('beforeRouteUpdate')

    next()
  },

  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
  // 用在哪些场景？
  beforeRouteLeave(to, from, next) {
    alert('beforeRouteLeave')

    next()
  }
}

const Main = {
  template: `<div>Main content</div>`
}

const Footer = {
  template: `<div>Footer....</div>`
}


const routes = [
  {
    path: '/home',
    name: 'home',
    components: {
      main: Main,
      footer: Footer
    },

    // Per-Route Guard
    beforeEnter: ((to, from, next) => {
      alert('U are enter home page')
      next()
    })
  },
  {
    path: '/other',
    name: 'other',
    component: Sidebar
  }
]


const router = new VueRouter({
  routes
})

// global guards
router.beforeEach((to, from, next) => {
  alert('Global Guards')
  next()
})

// 一个参数时候，为 to
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
})

const app = new Vue({
  router
}).$mount('#app')


// Global Guards
//  - beforeEach

// Global After Hooks
//  - afterEach

// Per-Route Guard
//  - beforeEnter

// Global Resolve Guards
//  - beforeResolve v2.5

// In-Component Guards
//  - beforeRouteEnter
//  - beforeRouteUpdate v2.2
//  - beforeRouteLeave

// 找出每个 hooks 的应用场景！