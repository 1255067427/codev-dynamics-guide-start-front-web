<template>
  <div class="index">
    <el-container>
      <el-header>
        <Top class="border-top" />
      </el-header>
      <el-main>
        <ProductInfo />
        <Videos />
        <Software />
        <ForDeveloper/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Top from "@/views/Top.vue";
import ProductInfo from "@/views/ProductInfo.vue";
import Videos from "@/views/Videos.vue";
import Software from "@/views/Software.vue";
import ForDeveloper from "@/views/ForDeveloper.vue";

export default {
  name: "Index",
  components: {
    Top,
    ProductInfo,
    Videos,
    Software,
    ForDeveloper
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