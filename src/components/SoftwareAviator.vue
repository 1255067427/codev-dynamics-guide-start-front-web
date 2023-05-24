<template>
  <div>
    <el-container>
      <el-aside
        width="150px"
        style="height: 200px; background-color: #fff; margin-right: 20px"
        class="aside"
      >
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="isShow(1)">
            <span slot="title">Android</span>
          </el-menu-item>
          <el-menu-item index="2" @click="isShow(2)">
            <span slot="title">H7</span>
          </el-menu-item>
          <el-menu-item index="3" @click="isShow(3)">
            <span slot="title">App</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <SoftwareAviatorAndroid
        v-if="softwareAviatorAndroidShow"
      ></SoftwareAviatorAndroid>
      <SoftwareAviatorH7 v-if="softwareAviatorH7Show"></SoftwareAviatorH7>
      <SoftwareAviatorApp v-if="softwareAviatorAppShow"></SoftwareAviatorApp>
    </el-container>
  </div>
</template>

<script>
import SoftwareAviatorAndroid from "./SoftwareAviatorAndroid.vue";
import SoftwareAviatorH7 from "./SoftwareAviatorH7.vue";
import SoftwareAviatorApp from "./SoftwareAviatorApp.vue";
export default {
  name: "SoftwareAviator",
  components: {
    SoftwareAviatorAndroid,
    SoftwareAviatorH7,
    SoftwareAviatorApp,
  },
  data() {
    return {
      softwareAviatorAndroidShow: true,
      softwareAviatorH7Show: false,
      softwareAviatorAppShow: false,
    };
  },
  methods: {
    isShow(index) {
      if (index == "1") {
        this.softwareAviatorAndroidShow = true;
        this.softwareAviatorH7Show = false;
        this.softwareAviatorAppShow = false;
      } else if (index == "2") {
        this.softwareAviatorH7Show = true;
        this.softwareAviatorAndroidShow = false;
        this.softwareAviatorAppShow = false;
      } else if (index == "3") {
        this.softwareAviatorAppShow = true;
        this.softwareAviatorAndroidShow = false;
        this.softwareAviatorH7Show = false;
      }
    },
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