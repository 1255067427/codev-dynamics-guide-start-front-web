<template>
  <div class="productInfo">
    <div class="title">Product Info</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item class="item" index="1" @click="isShow(1)">Sheet</el-menu-item>
      <el-menu-item class="item" index="2" @click="isShow(2)">Spec</el-menu-item>
      <el-menu-item class="item" index="3" @click="isShow(3)">Introduction</el-menu-item>
    </el-menu>
    <ProductInfoSheet v-if="infoSheetShow"></ProductInfoSheet>
    <ProductInfoSpec v-if="infoSpecShow"></ProductInfoSpec>
    <ProductInfoIntroduction
      v-if="infoIntroductionShow"
    ></ProductInfoIntroduction>
  </div>
</template>

<script>
import ProductInfoSheet from "./ProductInfoSheet.vue";
import ProductInfoSpec from "./ProductInfoSpec.vue";
import ProductInfoIntroduction from "./ProductInfoIntroduction.vue";
export default {
  name: "ProductInfo",
  components: {
    ProductInfoIntroduction,
    ProductInfoSheet,
    ProductInfoSpec,
  },
  data() {
    return {
      activeIndex: "1",
      infoSheetShow: true,
      infoSpecShow: false,
      infoIntroductionShow: false,
    };
  },
  methods: {
    isShow(index) {
      if (index == "1") {
        this.infoSheetShow = true;
        this.infoSpecShow = false;
        this.infoIntroductionShow = false;
      } else if (index == "2") {
        this.infoSpecShow = true;
        this.infoSheetShow = false;
        this.infoIntroductionShow = false;
      } else if (index == "3") {
        this.infoIntroductionShow = true;
        this.infoSpecShow = false;
        this.infoSheetShow = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.productInfo {
  padding-top: 50px;
  .title{
    font-size: 30px;
    font-weight: 700;
  }

  .item{
    font-size: 20px;
  }
}
</style>