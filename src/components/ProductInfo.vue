<template>
  <div class="productInfo">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Sheet</el-menu-item>
      <el-menu-item index="2">Speu</el-menu-item>
      <el-menu-item index="3">Introduction</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
</style>