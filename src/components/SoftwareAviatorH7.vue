<template>
  <div class="H7">
    <el-table
      :data="tableData"
      style="width: 990px"
      class="table"
      height="500px"
    >
      <el-table-column prop="title" label="Title" width="150">
      </el-table-column>
      <el-table-column
        class="version"
        prop="version"
        label="Version"
        width="150"
        class-name="version"
      >
      </el-table-column>
      <el-table-column prop="date" label="Date" width="150"> </el-table-column>
      <el-table-column prop="note" label="Note" width="350"> </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
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
  </div>
</template>
  
  <script>
export default {
  name: "SoftwareAviatorH7",
  data() {
    return {
      tableData: [
        {
          title: "H7",
          version: "v 3.0",
          date: "2016-05-01",
          note:"v 3.0",
        },
      ],
    };
  },
};
</script>
  
  <style lang="less" scoped>
.H7 {
}
</style>