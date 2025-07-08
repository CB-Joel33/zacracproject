import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import OTPverification from './pages/OTPverification.vue'

const routes = [
    {
     path: '/login',
    name: 'LoginPage',
   
    component: LoginPage,
  },
    
  { path: '/', name: 'Home', component: HomePage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/otp-verification', name: 'OTPverification', component: OTPverification },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router