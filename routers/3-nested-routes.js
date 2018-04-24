const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
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
        component: UserProfile
      },

      {
        path: 'posts', // don't => /user/:id/posts
        component: UserPosts
      },

      // 设置默认
      {
        path: '',
        component: UserHome
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
