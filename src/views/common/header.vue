<template>
  <div class="header">
    <div>
        <span>轻游酒店业务管理系统</span>
    </div>
    <el-dropdown @command="handleCloseBtn" class="_dropdown">
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="changeWord">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    handleCloseBtn(command) {
      if (command == "changeWord") {
        console.log("command");
      } else if (command == "logout") {
        window.sessionStorage.clear(); //清除token
        this.$router.push("/login");
      }
    }
  }
};
</script>
 
<style lang="less" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // font-size: 22px;
  color: #fff;
  background-color: #11c26d;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  // ul {
  //   list-style: none;
  //   li {
  //     float: left;
  //     line-height: 60px;
  //     height: 60px;
  //     text-align: center;
  //     padding: 0 10px;
  //     cursor: pointer;
  //   }
  //   i {
  //     line-height: 60px;
  //   }
  //   li:hover {
  //     background-color: #337ecc;
  //   }
  // }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>