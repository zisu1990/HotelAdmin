import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'; //导入登录组件


import RoomSerive from '../views/Room/RoomSerive.vue'

import Booking from '../views/Booking/Booking.vue';
import RoomBooking from '../views/Room/RoomBooking.vue';

import Guest from '../views/Guest/Guest.vue';

import MemberManage from '../views/MemberManage/MemberManage.vue';

import BillSetting from '../views/BillSetting/BillSetting.vue';

import Device from '../views/Device/Device.vue';

import RoomType from '../views/RoomType/RoomType.vue';

import RoomManage from '../views/RoomManage/RoomManage.vue';

import GuestInfo from '../views/GuestInfo/GuestInfo.vue';

import Log from '../views/Log/Log.vue';

import MemberSetting from '../views/MemberSetting/MemberSetting.vue';

import GoodsManage from '../views/GoodsManage/GoodsManage.vue';

import DataReport from '../views/DataReport/DataReport.vue';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/login',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path:'/index',
      //   name:'index',
      //   component:()=>import('@/views/index.vue'),
      //   meta:{
      //     title:'系统首页',
      //     hideclose:true,//不可以关闭
      //   }
      // },
      {
        path: '/room',//客房业务
        name: 'room',
        component: RoomSerive,
        meta: {
          title: '客房业务',
          hideclose: true, //不可以关闭
        }
      },
      {
        path: '/RoomBooking', //客房预订
        component: RoomBooking,
        meta: {
          title: '客房预订'
        }
      },
      {
        path: '/Booking', //预订查询
        component: Booking,
        meta: {
          title: '预订查询'
        }
      },
      {
        path: '/Guest', //住客查询
        component: Guest,
        meta: {
          title: '住客查询'
        }
      },
      {
        path: '/MemberManage', //会员管理
        component: MemberManage,
        meta: {
          title: '会员管理'
        }
      },
      {
        path: '/BillSetting', //计费设置
        component: BillSetting,
        meta: {
          title: '计费设置'
        }
      },
      {
        path: '/Device', //设备管理
        component: Device,
        meta: {
          title: '设备管理',
        }
      },
      {
        path: '/RoomType', //房间类型管理
        component: RoomType,
        meta: {
          title: '房间类型管理'
        }
      }, 
      {
        path: '/RoomManage', //房间管理
        component: RoomManage,
        meta:{
          title:'房间管理'
        }
      }, 
      {
        path: '/GuestInfo', //客史信息
        component: GuestInfo,
        meta:{
          title:'客史信息'
        }
      }, 
      {
        path: '/Log', //操作日志
        component: Log,
        meta:{
          title:'操作日志'
        }
      }, 
      {
        path: '/MemberSetting', //会员设置
        component: MemberSetting,
        meta:{
          title:'会员设置'
        }
      },
       {
        path: '/GoodsManage', //物件管理
        component: GoodsManage,
        meta:{
          title:'物件管理'
        }
      }, 
      {
        path: '/DataReport', //数据统计
        component: DataReport,
        meta:{
          title:'数据统计'
        }
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router