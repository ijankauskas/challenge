import { createRouter, createWebHashHistory } from 'vue-router'

import LogIn from './components/LogIn.vue'
import ComparacionValores from './components/ComparacionValores.vue'
import ConvertidorDivisas from './components/ConvertidorDivisas.vue'

const routes = [
  {
    path: '/',
    name: 'Log In',
    component: LogIn,
  },
  {
    path: '/ComparacionValores',
    name: 'Comparacion Valores',
    component: ComparacionValores,
  },
  {
    path: '/ConvertidorDivisas',
    name: 'Comparacion Divisas',
    component: ConvertidorDivisas,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router