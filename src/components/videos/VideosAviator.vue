<template>
  <div class="videosDrone">
    <ul class="videos">
      <li v-for="(item, index) in videos" :key="index">
        <div class="item">
          <el-button type="text" @click="check(item.id)">
            <video class="video" :src="item.url"></video>
            <el-button
              class="play"
              icon="el-icon-caret-right"
              circle
            ></el-button>
          </el-button>
          <div class="text">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </li>
    </ul>
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
    <el-dialog
      fullscreen
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      center
      v-if="dialogVisible"
    >
      <video
        class="bigVideo"
        height="750px"
        :src="this.url"
        autoplay
        controls
        muted
      ></video>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VideosDrone",
  data() {
    return {
      dialogVisible: false,
      videos: {},
      url: "",
      page: {
        pageNum: 1,
        pageSize: 6,
        total: 0,
        type: 2,
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    list() {
      let that = this;
      axios({
        url: "/videos/list",
        method: "post",
        data: this.page,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        that.videos = res.data.data.records;
        if (res.data.data) {
          that.page.total = res.data.data.total;
        }
      });
    },
    check(id) {
      let that = this;
      axios({
        url: "/videos/check",
        method: "post",
        data: id,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        that.url = res.data.msg;
      });
      that.dialogVisible = true;
    },
    pagechange(num) {
      this.page.pageNum = num;
      this.list();
    },
  },
  beforeMount() {
    this.list();
  },
};
</script>

<style lang="less">
.videosDrone {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 563.8px;

  .videos {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      padding-right: 20px;

      .item {
        position: relative;
        width: 373px;
        .video {
          width: 373px;
          border-radius: 16px;
        }

        .play {  
          position: absolute;
          top: 93px;
          left: 160px;                     
          width: 50px;
          height: 50px;
          font-size: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            background-color: #fff;
            color: black;
            border: 1px transparent;
          }
        }

        .text {
          width: 370px;
          font-size: 16px;
          padding-bottom: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      &:nth-child(3n) {
        padding-right: 0;
      }
    }
  }

  .page {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 0;
  }
}
.bigVideo {
  padding-top: 50px;
}
.el-dialog__body {
  display: flex;
  justify-content: center;
}

.el-dialog {
  background: #232425 !important;
}
</style>