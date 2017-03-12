import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormInput',
          component:FormInput
        }
        

      ]
    }
  ]
})
