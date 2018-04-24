const User = {
  template: '<div>User - {{ $route.params.id }}<br><br><br><pre>{{ $route.params }}</pre></div>'
}

const routes = [
  {
    path: '/user/:id',
    component: User
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')