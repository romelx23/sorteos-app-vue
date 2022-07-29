import {createRouter,createWebHistory} from 'vue-router';
import JiraPage from '../components/jira/JiraPage.vue';
import SorteosPage from '../components/sorteos/SorteosPage.vue';

const history = createWebHistory();
const routes=[
    {
      path:'/',
      // name:'home',
      component:SorteosPage
    },
    {
      path:'/jira',
      // name:'jira',
      component:JiraPage
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  // component:()=>import('./components/jira/JiraPage.vue')
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  // component:()=>import('./components/sorteos/SorteosPage.vue')
  //   },
  //   {
  //     path: '/dashboard',
  //     name: 'dashboard',
  //     component: Dashboard,
  //     children: [
  //       {
  //         path: '/dashboard/dashboard-home',
  //         name: 'dashboard-home',
  //         component: DashboardHome
  //       },
  //       {
  //         path: '/dashboard/dashboard-about',
  //         name: 'dashboard-about',
  //         component: DashboardAbout
  //       }
  //     ]
  //   }
  // ]

const router = createRouter({
  history,
  routes
});
export default router;