<template>
  <div>
    <el-container>
      <el-aside
        width="150px"
        style="background-color: #fff; height: 200px; margin-right: 20px"
        class="aside"
      >
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="2">
            <span slot="title">Windows App</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <SoftwareDesktopWindowsApp></SoftwareDesktopWindowsApp>
    </el-container>
  </div>
</template>

<script>
import SoftwareDesktopWindowsApp from "./SoftwareDesktopWindowsApp.vue";
export default {
  name: "SoftwareDesktop",
  components: {
    SoftwareDesktopWindowsApp,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  border-left: solid 1px #e6e6e6;
  border-right: solid 1px #e6e6e6;
  .el-menu-item {
    border-bottom: solid 1px #e6e6e6;
  }
}
</style>