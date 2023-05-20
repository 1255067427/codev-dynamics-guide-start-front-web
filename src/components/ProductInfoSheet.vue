<template>
  <div class="sheet">
    <ul class="ul">
      <li class="li">
        <el-link href="../pdf/a.pdf" :underline="false"
          >产品手册_2304.pdf</el-link
        >
      </li>
      <li class="li">
        <el-link href="https://element.eleme.io" :underline="false"
          >产品手册_2304.pdf</el-link
        >
      </li>
      <li class="li">
        <el-link href="https://element.eleme.io" :underline="false"
          >产品手册_2304.pdf</el-link
        >
      </li>
      <li class="li">
        <el-link href="https://element.eleme.io" :underline="false"
          >产品手册_2304.pdf</el-link
        >
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "ProductInfoSheet",
};
</script>

<style scoped lang="less">
.sheet {
  .ul {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 45px;
    .li {
      height: 45px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-left: 10px;

    }

    li:last-child{
      border-bottom: 0;
    }
  }
}
</style>