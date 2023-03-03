import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'user',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: 'orders',
        name: '訂單頁',
        component: () => import('../views/OrderList.vue')
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/ProductListView.vue')
      },
      {
        path: 'login',
        name: '後台登入',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: '',
        name: '後台首頁',
        component: () => import('../views/DashboardView.vue')
      },
      {
        path: 'products',
        name: '產品管理列表',
        component: () => import('../views/ProductMangeView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
