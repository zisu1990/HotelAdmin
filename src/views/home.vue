<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="header-left">
        <img src="@/assets/logo.png" alt srcset>
        <span>轻游酒店业务管理系统</span>
      </div>
      <el-button type="text" @click="logout">退出</el-button>
    </el-header>

    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 导航菜单 -->
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-menu-item index="/RoomSerive">
            <i class="el-icon-s-custom"></i>
            <span>客房业务</span>
          </el-menu-item>
          <el-menu-item index="/Booking">
            <i class="el-icon-s-custom"></i>
            <span>预订查询</span>
          </el-menu-item>
          <el-menu-item index="/Guest">
            <i class="el-icon-s-custom"></i>
            <span>住客查询</span>
          </el-menu-item>
          <el-menu-item index="/MemberManage">
            <i class="el-icon-s-custom"></i>
            <span>会员管理</span>
          </el-menu-item>
          <el-menu-item index="/BillSetting">
            <i class="el-icon-s-custom"></i>
            <span>计费设置</span>
          </el-menu-item>
          <el-menu-item index="/Device"> 
            <i class="el-icon-s-custom"></i>
            <span>设备管理</span>
          </el-menu-item>
          <el-menu-item index="/RoomType">
            <i class="el-icon-s-custom"></i>
            <span>房间类型管理</span>
          </el-menu-item>
          <el-menu-item index="/RoomManage">
            <i class="el-icon-s-custom"></i>
            <span>房间管理</span>
          </el-menu-item>
          <el-menu-item index="/GuestInfo">
            <i class="el-icon-s-custom"></i>
            <span>客史信息</span>
          </el-menu-item>
          <el-menu-item index="/Log">
            <i class="el-icon-s-custom"></i>
            <span>操作日志</span>
          </el-menu-item>
          <el-menu-item index="/MemberSetting">
            <i class="el-icon-s-custom"></i>
            <span>会员设置</span>
          </el-menu-item>
          <el-menu-item index="/GoodsManage">
            <i class="el-icon-s-custom"></i>
            <span>物件管理</span>
          </el-menu-item>
          <el-menu-item index="/DataReport">
            <i class="el-icon-s-custom"></i>
            <span>数据统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 右侧主体 -->
      <el-main>
        <!-- 面包屑导航区域 -->
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path:'/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">客房业务</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb> -->
        <!-- 路由出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activePath: "" ,//被激活的链接地址
    };
  },
  created() {
    // this.activePath = window.sessionStorage.getItem("path");
  },
  methods: {
    logout() {
      window.sessionStorage.clear(); //清除token
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  .el-header {
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    color: #fff;
    font-size: 20px;
    .header-left {
      display: flex;
      align-items: center;
      padding-left: 10px;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
    background: #333744;
    .el-menu {
      border-right: 0;
    }
  }
  .el-main {
    background: #eee;
  }
}
</style>