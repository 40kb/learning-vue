// NAVIGATION VS NAMED ROUTER

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const Home = {
  template: `<div>Home.......</div>`
}

const UserProfile = {
  template: `<div>{{ $route.params.id }} Profile</div>`
}

const UserPosts = {
  template: `<div>{{ $route.params.id }} Posts</div>`
}

const UserHome = {
  template: `<div>User Home Page</div>`
}

// 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile', // don't => /user/:id/profile
        component: UserProfile,
        name: 'userProfile'
      },

      {
        path: 'posts', // don't => /user/:id/posts
        component: UserPosts,
        name: 'userPosts'
      },

      // 设置默认
      {
        path: '',
        component: UserHome,
        name: 'userHome'
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  created() {
    console.log(this)
  },
  methods: {
    getProfile() {
      // router.push('home')
      // router.push({ name: 'home' })



      // navigation to child Router by name
      // router.push({ name: 'userProfile', params: { id: 'barrrrrrr' }})

      // navigation to child Router by path
      const id = 'google'
      router.push({ path: `/user/${id}/profile` })



      // with query, resulting in /register?plan=private
      // router.push({ path: 'register', query: { plan: 'private' }})

      console.log(this)
    }
  }
}).$mount('#app')

// 事实上 <router-link :to=> 是调用 router.push()
