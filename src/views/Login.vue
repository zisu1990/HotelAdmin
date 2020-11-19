<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title">
        <p>Hello,欢迎登录</p>
        <p>轻游酒店业务管理系统</p>
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        label-width="0px"
        class="login-form"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item prop="username">
          <el-input
            clearable
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            clearable
            v-model="loginForm.password"
            type="password"
            prefix-icon="el-icon-s-goods"
            placeholder="请输入密码"
            show-password
          >></el-input>
        </el-form-item>

        <el-form-item class="codewarp">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" class="code"></el-input>
          <div class="codeImg">
            <img src="../assets/image/code.jpg" alt srcset>
          </div>
          <span>换一组</span>
        </el-form-item>

        <el-form-item class="bts">
          <el-button type="primary" @click="login">登录</el-button>
          <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>




<script>
export default {
  name: "login",
  data() {
    return {
      //登录表单
      loginForm: {
        username: "admin",
        password: "123456",
        code: "FFBB"
      },

      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login() {
      this.$router.push("/room");
    }

    //重置
    // resetLoginForm() {
    //   //console.log(this)
    //   this.$refs.loginFormRef.resetFields();
    // }
  }
};
</script>




<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/image/bg.png");
  background-size: cover;
}
.login-box {
  width: 450px;
  height: 570px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  padding: 40px 22px;
  box-sizing: border-box;
  text-align: center;
  .title {
    font-size: 36px;
    color: #fff;
  }
}

.bts {
  width: 100%;
  .el-button {
    width: 408px;
    background: #1e50ae;
    color: #fff;
    line-height: 55px;
    height: 55px;
    padding: 0;
    font-size: 28px;
    border: 0;
    border-radius: 10px;
  }
}
.login-form {
  padding-top: 42px;
  width: 100%;
  box-sizing: border-box;
  /deep/.el-input__inner {
    font-size: 20px;
    color: #989898;
    border-radius: 10px;
    height: 55px;
    line-height: 55px;
    border-radius: 10px;
  }
  /deep/.el-input__icon {
    height: 55px;
    line-height: 55px;
    font-size: 20px;
  }
  .codewarp {
    position: relative;
    display: flex;
    justify-content: space-bettew;
    align-items: center;
    
    .codeImg{
      width:144px;
      height: 50px; 
      position: absolute;
      top: 0;
      left: 170px;
    }
    .code {
      position:relative;
      width: 150px;
    }
    span{
      cursor: pointer;
      position: absolute;
      right: -250px;
      top: 8px;
      font-size: 22px;
      color: #fff;
    }
  }
}
</style>

