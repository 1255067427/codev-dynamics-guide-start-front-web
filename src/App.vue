<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./views/Index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style scoped lang="less">
#app{
  width: 1200px;
  margin: auto;
  background-color: #fff;
  font-size: 24px;
}
</style>
