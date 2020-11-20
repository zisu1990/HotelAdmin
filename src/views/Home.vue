<template>
  <div class="homeContainer">
    <vHeader></vHeader>
    
    <div class="headContainer">
      <vAside></vAside>
      <div class="tagContainer">
        <vTag></vTag>
        <div class="mainContainer">
          <div class="main">
            <router-view></router-view>
          </div>
          <vFooter class="footer"></vFooter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from "@/views/common/header";
import vAside from "@/views/common/aside";
import vTag from "@/views/common/tag";
import vFooter from "@/views/common/footer";

export default {
  data() {
    return {
      
    };
  },
  components: { vHeader, vAside, vTag, vFooter }
};
</script>
<style lang="less" scoped>
.homeContainer {
  // border: 1px solid red;
  box-sizing: border-box;

  height: 100vh;

  .headContainer {
    // border: 1px solid red;
    box-sizing: border-box;

     display: flex;
  flex-flow: row nowrap;
    flex: auto;
    .tagContainer {
      //  border: 1px solid blue;
      display: flex;
      flex-flow: column nowrap;
      flex: auto;

      .mainContainer {
        // border: 1px solid blue;
        background-color: #f0f0f0; //灰色背景

        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        flex: auto;

        overflow: auto;
        height: calc(100vh - 100px);

        .main {
          // border:1px solid green;
          padding: 10px;

          display: flex;
          flex: auto;
          // overflow: auto;
        }
        .footer {
          // border: 1px solid orange;

          flex: 0 0 60px;
        }
      }
    }
  }
}
</style>
