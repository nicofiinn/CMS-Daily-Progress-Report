import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import DashboardView from '../views/DashboardView.vue'
import KaryawanView from '../views/KaryawanView.vue'
import LaporanView from '../views/LaporanView.vue'
import SettingsView from '../views/SettingsView.vue'
import RoleView from '../views/RoleView.vue'
import MasterRole from '../views/MasterRole.vue'
import DataDPR from '../views/DataDPR.vue'
import HariLibur from '../views/HariLibur.vue'
import Izin from '../views/Izin.vue'
import SettingMenu from '../views/SettingMenu.vue'
import DPRBermasalah from '../views/DPRBermasalah.vue'
import Login from '../components/Login.vue'
import ForgetPassword from '../components/ForgetPassword.vue'
import SettingEmail from '../views/SettingEmail.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: ForgetPassword
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'karyawan',
        name: 'karyawan',
        component: KaryawanView
      },
      {
        path: 'laporan',
        name: 'laporan',
        component: LaporanView
      },
      {
        path: 'settings',
        name: 'settings',
        component: SettingsView
      },
      {
        path: 'role',
        name: 'role',
        component: RoleView
      },
      {
        path: 'masterrole',
        name: 'masterrole',
        component: MasterRole
      },
      {
        path: 'datadpr',
        name: 'datadpr',
        component: DataDPR
      },
      {
        path: 'harilibur',
        name: 'harilibur',
        component: HariLibur
      },
      {
        path: 'izin',
        name: 'izin',
        component: Izin
      },
      {
        path: 'settingmenu',
        name: 'settingmenu',
        component: SettingMenu
      },
      {
        path: 'dprbermasalah',
        name: 'dprbermasalah',
        component: DPRBermasalah
      },
      {
        path: 'settingemail',
        name: 'settingemail',
        component: SettingEmail
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
