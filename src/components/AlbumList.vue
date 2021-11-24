<template>
  <div class="album_list">
    <el-carousel trigger="click" :autoplay="false" height="190px" :interval="4000"
                 arrow="always">
      <el-carousel-item>
        <ul>
          <li v-for="(item,index) in albumList" v-if="index<5">
            <div class="back">
              <img :src="item.picUrl" alt="">
            </div>
            <img class="face" :src="item.picUrl" alt="">
            <span class="album_name">{{ item.name }}</span>
            <span>{{ item.artist.name }}</span>
          </li>
        </ul>
      </el-carousel-item>
      <el-carousel-item>
        <ul>
          <li v-for="(item,index) in albumList" v-if="index>=5">
            <div class="back">
              <img :src="item.picUrl" alt="">
            </div>
            <img class="face" :src="item.picUrl" alt="">
            <span class="album_name">{{ item.name }}</span>
            <span>{{ item.artist.name }}</span>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  data() {
    return {
      albumList: [],
      pageSize: 5,
    }
  },
  methods: {
    async getList(){
      const [err,res]=await this.rq.get(`/album/new?area=ALL&limit=10`)
      if(err) return
      this.albumList = res.albums
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style scoped lang="less">
.album_list {
  border: 1px solid #adadad;
  ul {
    height: 100%;
    background-color: #efefef;
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 10px;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 200px;
      width: 120px;
      position: relative;
      .album_name{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        width: 100%;
      }
      .face{
        z-index: 1;
        border: 1px solid #adadad;
      }
      .back{
        position: absolute;
        left:20px;
        top: 0px;
        width: 100%;
        transform: scale(1.1);
        filter: blur(6px);
      }
      img{
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>