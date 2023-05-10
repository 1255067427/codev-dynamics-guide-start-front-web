<template>
  <div>
    <el-container>
      <el-header>
        <Top />
      </el-header>
      <el-main>
        <ProductInfo />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "Index",
  components: {
    Top,
    ProductInfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-container {
}
</style>