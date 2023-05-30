<template>
  <div class="spec">
    <el-table :data="tableData" style="width: 100%" height="628px">
      <el-table-column type="index" label="#" width="200"> </el-table-column>
      <el-table-column prop="name" label="title" width="300"> </el-table-column>
      <el-table-column prop="date" label="Date" width="300"> </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            size="small"
            icon="el-icon-view"
            type="primary"
            @click="empId(scope.row.id)"
            >Reference Doc</el-button
          >
          <el-button
            size="small"
            icon="el-icon-download"
            type="primary"
            @click="empId(scope.row.id)"
            >Download</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page.pageSize"
        :total="page.total"
        :current-page="page.pageNum"
        @current-change="pagechange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfoSpec",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-01",
          name: "王小虎",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      page: {
        pageNum: 1,
        pageSize: 12,
        total: 0,
        name: "",
      },
    };
  },
  methods:{
    pagechange(num) {
      this.page.pageNum = num;
      this.list();
    },
  }
};
</script>

<style scoped lang="less">
.spec {
  .page {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-top: 24px;
  }
}
.el-table::before {
  height: 0px;
}
.customer-table .el-table__fixed-right::before,
.el-table__fixed::before {
  width: 0;
}
</style>