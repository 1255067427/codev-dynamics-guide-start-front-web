<template>
  <div class="sheet">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="628px"
      class="table"
    >
      <el-table-column type="index" label="#" width="200"> </el-table-column>
      <el-table-column prop="title" label="Title" width="300">
      </el-table-column>
      <el-table-column prop="date" label="Date" width="300"> </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            size="small"
            icon="el-icon-view"
            type="primary"
            @click="reference(scope.row.id)"
            >Reference</el-button
          >
          <el-button
            size="small"
            icon="el-icon-download"
            type="primary"
            @click="download(scope.row.id)"
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
import axios from "axios";
export default {
  name: "ProductInfoSheet",
  data() {
    return {
      tableData: [],
      url: "",
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        type: 3,
      },
    };
  },
  methods: {
    list() {
      let that = this;
      axios({
        url: "/productInfo/list",
        method: "post",
        data: this.page,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        that.tableData = res.data.data.records;
        if (res.data.data) {
          that.page.total = res.data.data.total;
        }
      });
    },
    pagechange(num) {
      this.page.pageNum = num;
      this.list();
    },
    reference(id) {
      axios({
        url: "/productInfo/reference",
        method: "post",
        data: id,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        window.open(res.data.msg);
      });
    },
    download(id) {
      axios({
        url: "/productInfo/download",
        method: "post",
        data: id,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Disposition": "attachment=filename;",
        },
      }).then((res) => {
        window.location.href = res.data.data;
      });
    },
  },
  beforeMount() {
    this.list();
  },
};
</script>

<style scoped lang="less">
.sheet {
  .table {
  }
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