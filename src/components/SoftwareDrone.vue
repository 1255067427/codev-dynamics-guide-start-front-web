<template>
  <div>
    <el-container>
      <el-aside
        width="150px"
        style="height: 200px; background-color: #fff; margin-right: 20px"
        class="aside"
      >
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="2" @click="isShow(1)">
            <span slot="title">AQ3 F</span>
          </el-menu-item>
          <el-menu-item index="4" @click="isShow(2)">
            <span slot="title">AQ2</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <SoftwareDroneAQ3F v-if="softwareDroneAQ3FShow"></SoftwareDroneAQ3F>
      <SoftwareDroneAQ2 v-if="softwareDroneAQ2Show"></SoftwareDroneAQ2>
    </el-container>
  </div>
</template>

<script>
import SoftwareDroneAQ3F from "./SoftwareDroneAQ3F.vue";
import SoftwareDroneAQ2 from "./SoftwareDroneAQ2.vue";
export default {
  name: "SoftwareDrone",
  components: {
    SoftwareDroneAQ3F,
    SoftwareDroneAQ2,
  },
  data() {
    return {
      softwareDroneAQ3FShow: true,
      softwareDroneAQ2Show: false,
    };
  },
  methods: {
    isShow(index) {
      if (index == "1") {
        this.softwareDroneAQ3FShow = true;
        this.softwareDroneAQ2Show = false;
      } else if (index == "2") {
        this.softwareDroneAQ3FShow = false;
        this.softwareDroneAQ2Show = true;
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