<template>
    <div class="forDeveloper">
      <div class="title">For Developer</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item class="item" index="1" @click="isShow(1)">Drone</el-menu-item>
        <el-menu-item class="item" index="2" @click="isShow(2)">Aviator</el-menu-item>
        <el-menu-item class="item" index="3" @click="isShow(3)">Desktop</el-menu-item>
      </el-menu>
      <SoftwareDrone v-if="softwareDroneShow"></SoftwareDrone>
      <SoftwareAviator v-if="softwareAviatorShow"></SoftwareAviator>
      <SoftwareDesktop v-if="softwareDesktopShow"></SoftwareDesktop>
    </div>
  </template>
    
    <script>
  export default {
    name: "Software",
    components: {
    },
    data() {
      return {
        activeIndex: "1",
        softwareDroneShow: true,
        softwareAviatorShow: false,
        softwareDesktopShow: false,
      };
    },
    methods: {
      isShow(index) {
        if (index == "1") {
          this.softwareDroneShow = true;
          this.softwareAviatorShow = false;
          this.softwareDesktopShow = false;
        } else if (index == "2") {
          this.softwareAviatorShow = true;
          this.softwareDroneShow = false;
          this.softwareDesktopShow = false;
        } else if (index == "3") {
          this.softwareDesktopShow = true;
          this.softwareDroneShow = false;
          this.softwareAviatorShow = false;
        }
      },
    },
  };
  </script>
    
  <style lang="less" scoped>
  .forDeveloper {
    padding-top: 50px;
  
    .title {
      font-size: 30px;
      font-weight: 700;
    }
  
    .item{
      font-size: 20px;
    }
  }
  </style>