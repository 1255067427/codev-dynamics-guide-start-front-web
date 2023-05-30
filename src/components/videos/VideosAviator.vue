<template>
  <div class="aviator">
    <div class="videos">
      <video
        class="video"
        src="https://codev-dynamics.com/wp-content/uploads/2022/07/3.mp4"
        poster="https://codev-dynamics.com/wp-content/uploads/2022/07/3.jpg"
        controls
      ></video>
      <video
        class="video"
        src="https://codev-dynamics.com/wp-content/uploads/2022/07/3.mp4"
        poster="https://codev-dynamics.com/wp-content/uploads/2022/07/3.jpg"
        controls
      ></video>
      <video
        class="video"
        src="https://codev-dynamics.com/wp-content/uploads/2022/07/3.mp4"
        poster="https://codev-dynamics.com/wp-content/uploads/2022/07/3.jpg"
        controls
      ></video>
      <video
        class="video"
        src="https://codev-dynamics.com/wp-content/uploads/2022/07/3.mp4"
        poster="https://codev-dynamics.com/wp-content/uploads/2022/07/3.jpg"
        controls
      ></video>
      <video
        class="video"
        src="https://codev-dynamics.com/wp-content/uploads/2022/07/3.mp4"
        poster="https://codev-dynamics.com/wp-content/uploads/2022/07/3.jpg"
        controls
      ></video>
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "VideosAviator",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.aviator {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .videos {
    margin-bottom: 30px;
    .video {
      padding-bottom: 24px;
      padding-right: 24px;
      width: 370px;

      &:nth-child(3n) {
        padding-right: 0px;
      }
    }
  }
  .page{
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 0;
  }
}
</style>