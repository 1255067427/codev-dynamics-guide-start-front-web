<template>
  <div class="softWare">
    <h1>Software</h1>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">FC</el-menu-item>
      <el-menu-item index="2">Phalanx</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Software",
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

<style>
.softWare{
  padding-top: 50px;
}
</style>