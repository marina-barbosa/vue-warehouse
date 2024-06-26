import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WarehouseIndex from '../views/WarehouseIndex.vue';
import WarehouseNew from '../views/WarehouseNew.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehouseIndex
  },
  {
    path: '/warehouse/new',
    name: 'new',
    component: WarehouseNew
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
