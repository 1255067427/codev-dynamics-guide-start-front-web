<template>
  <div class="text">
    <div class="left">
      <el-image style="width: 200px" :src="url"></el-image>
    </div>
    <div class="right">
      <span>CODEV DYNAMICS GUIDE START</span>
      <span class="down">NOTHING USELESS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      url: require("@/assets/images/logo.png"),
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.text {
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: row;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 100px;
  margin-top: 10px;

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    .down {
      font-size: 30px;
    }
  }
}
</style>
