// named views vs rename vs alias
const Sidebar = {
  template: `<div>Default.....</div>`
}

const Main = {
  template: `<div>Main content</div>`
}

const Footer = {
  template: `<div>Footer....</div>`
}

const routes = [
  // a single route can define multiple named components
  // which will be rendered into <router-view>s with corresponding names.
  {
    path: '/home',
    name: 'home',
    components: {           // => /home 下有三个 <router-view>
      default: Sidebar,     // => view-name: component-name
      sidebar: Sidebar,
      main: Main,
      footer: Footer
    }
  },

  {
    path: '/other',
    name: 'other',
    components: {
      default: Main
    }
  },

  {
    path: '/test',    // 访问 /test 的时候重定向到 home，URL上展示的是 /home
    alias: '/demo',   // 访问 /demo 的时候重定向到 home，URL上依然展示的是 /demo
    redirect: 'home'
    // redirect: { name: 'home' }
    // redirect: to => {
    //   console.log(to)
    // }
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)

  next(false)
})

const app = new Vue({
  router
}).$mount('#app')

// 『重定向』的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么『别名』又是什么呢？
// /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。