<template>
  <div class="videos">
    <div class="title">Videos</div>
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal">
      <el-menu-item class="item" index="1" @click="isShow(1)">Drone</el-menu-item>
      <el-menu-item class="item" index="2" @click="isShow(2)">Aviator</el-menu-item>
    </el-menu>
    <VideosDrone v-if="droneShow"></VideosDrone>
    <VideosAviator v-if="aviatorShow"></VideosAviator>
  </div>
</template>

<script>
import VideosDrone from "../components/videos/VideosDrone.vue";
import VideosAviator from "../components/videos/VideosAviator.vue";
export default {
  name: "Videos",
  components: {
    VideosDrone,
    VideosAviator,
  },
  data() {
    return {
      activeIndex: "1",
      droneShow: true,
      aviatorShow: false,
    };
  },
  methods: {
    isShow(index) {
      if (index == "1") {
        this.droneShow = true;
        this.aviatorShow = false;
      } else if (index == "2") {
        this.aviatorShow = true;
        this.droneShow = false;
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
.videos {
  padding-top: 50px;
  .menu {
    margin-bottom: 24px;
  }

  .title {
    font-size: 30px;
    font-weight: 700;
  }

  .item{
    font-size: 20px;
  }
}
</style>