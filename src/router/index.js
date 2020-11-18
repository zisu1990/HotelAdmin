import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue'; //导入登录组件



import Home from '../views/home.vue';

import RoomSerive from '../views/Room/RoomSerive.vue';

import Booking from '../views/Booking/Booking.vue';

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






Vue.use(VueRouter);




const router = new VueRouter({
  routes: [{

      path: '/',
      redirect: '/login' //重定向地址
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      redirect: '/RoomSerive', //重定向地址
      component: Home,
      children: [{
          path: '/RoomSerive', //客房业务
          component: RoomSerive
        },
        {
          path: '/Booking', //预订查询
          component: Booking
        },
        {
          path: '/Guest', //住客查询
          component: Guest
        },
        {
          path: '/MemberManage', //会员管理
          component: MemberManage
        },
        {
          path: '/BillSetting', //计费设置
          component: BillSetting
        },
        {
          path: '/Device', //设备管理
          component: Device
        },
        {
          path: '/RoomType', //房间类型管理
          component: RoomType
        }, {
          path: '/RoomManage', //房间管理
          component: RoomManage
        }, {
          path: '/GuestInfo', //客史信息
          component: GuestInfo
        }, {
          path: '/Log', //操作日志
          component: Log
        }, {
          path: '/MemberSetting', //会员设置
          component: MemberSetting
        }, {
          path: '/GoodsManage', //物件管理
          component: GoodsManage
        }, {
          path: '/DataReport', //数据统计
          component: DataReport
        },
      ]
    }
  ]

})



// 挂载路由导航守卫
// router.beforeEach((to,form,next) =>{
//   //to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   //next是一个函数，表示放行   next('/login')  强制跳转
//   if(to.path === '/login') return next()
//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })







export default router;