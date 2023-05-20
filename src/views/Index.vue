<template>
  <div class="index">
    <el-container>
      <el-header>
        <Top class="border-top"/>
      </el-header>
      <el-main>
        <ProductInfo />
        <Videos />
        <Software />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import Videos from "@/components/Videos.vue";
import Software from "@/components/Software.vue";

export default {
  name: "Index",
  components: {
    Top,
    ProductInfo,
    Videos,
    Software,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.index {


}
</style>