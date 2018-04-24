<!-- create a single file component -->
<template>
  <div>
    <p>Server Status: {{ status }}</p>
  </div>
</template>
<script>
  export default {
    name: 'myCmp',
    data() {
      return {
        status: 'Critical'
      }
    },

    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<!--
  USE
    step1: import myCmp from './myCmp.vue'
    step2: register it in your App.vue/other...components
      Vue.component('my-cmp', myCmp) - Globally

      other.vue - Locally
        template>div
        script
          import myCmp from './myCmp.vue'
          export default {
            components: {
              'my-cmp': myCmp
            }
          }


    How to Name your component Tags Selectors
      import Server from './Server.vue'
      import Header from './Header.vue'

      ...
        components: {
          'app-header': Header,
          'app-server': Server
        }

      in your template:
        <app-header></app-header>
        <app-server</app-server>
 -->

 <style scoped>
   /*
      scopeing component styles
      Vue 怎么处理？
        会把这些样式放到当前Vue/页面的 <head> 里面
        在页面元素上加入ID, 例如: `data-v-f534532`
        然后通过这个id来选择元素：div[data-v-f534532] { border: 1px solid red; }
    */
  div {
    border: 1px solid red;
  }
 </style>