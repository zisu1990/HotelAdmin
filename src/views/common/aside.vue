<template>
  <div class="sidebar">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo menu"
      active-text-color="#10B9D3"
      unique-opened
      router
    >
      <el-menu-item index="/room">
        <i class="el-icon-s-home"></i>
        <span slot="title">客房业务</span>
      </el-menu-item>


      <el-menu-item index="/Booking">
        <i class="el-icon-s-home"></i>
        <span slot="title">预订查询</span>
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



  </div>
</template>
<script>
// import bus from './bus';
export default {
  data() {
    return {

    };
  }
};
</script>
<style lang="less" scoped>
.sidebar {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  text-align: left;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
  }
  .menu {
    height: 100%;
  }
}
</style>