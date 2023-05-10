<template>
  <div class="top">
    <div class="text">
      <span>CODEV DYNAMICS GUIDE START</span>
      <span>NOTHING USELESS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>
