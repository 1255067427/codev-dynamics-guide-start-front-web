<template>
  <div class="softwareDrone">
    <el-container>
      <el-aside
        width="150px"
        style="height: 200px; background-color: #fff; margin-right: 20px"
        class="aside"
      >
        <el-menu
          :default-active="JSON.stringify(menu[0].id)"
          class="el-menu-vertical-demo"
        >
          <el-menu-item
            :index="JSON.stringify(item.id)"
            v-for="(item, index) in menu"
            :key="index"
            @click="softMenuType(item.id)"
          >
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-table
        :data="tableData"
        style="width: 990px"
        class="table"
        height="500px"
      >
        <el-table-column prop="title" label="Title" width="250">
        </el-table-column>
        <el-table-column
          class="version"
          prop="version"
          label="Version"
          width="140"
          class-name="version"
        >
        </el-table-column>
        <el-table-column prop="date" label="Date" width="140">
        </el-table-column>
        <el-table-column prop="note" label="Note" width="300">
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
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
    </el-container>
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
  name: "SoftwareDrone",
  components: {},
  data() {
    return {
      tableData: [],
      type: 3,
      menu: [{}],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        menuType:3,
      },
    };
  },
  methods: {
    menuList() {
      let that = this;
      axios({
        url: "/software/menu/front/list",
        method: "post",
        data: this.type,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        that.menu = res.data.data;
      });
    },
    pagechange(num) {
      this.page.pageNum = num;
      this.list();
    },
    softMenuType(type) {
      this.page.type = type;
      this.softwareList();
    },
    softwareList() {
      let that = this;
      axios({
        url: "/software/list",
        method: "post",
        data: this.page,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        that.tableData = res.data.data.records;
      });
    },
    download(id) {
      axios({
        url: "/software/download",
        method: "post",
        data: id,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        window.open(res.data.data);
      });
    },
  },
  beforeMount() {
    this.softwareList();
  },
  created() {
    this.menuList();
  },
};
</script>

<style lang="less" scoped>
.softwareDrone {
  .page {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-top: 24px; 
  }
}

.el-menu {
  border-left: solid 1px #e6e6e6;
  border-right: solid 1px #e6e6e6;
  .el-menu-item {
    border-bottom: solid 1px #e6e6e6;
  }
}
.el-table::before {
  height: 0px;
}
</style>