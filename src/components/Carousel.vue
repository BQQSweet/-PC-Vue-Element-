<template>
  <el-carousel @change="changeHandler" trigger="click" height="350px" :interval="4000" arrow="always">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
      <div class="image">
        <img :src="item.imageUrl" alt="altText"/>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      banner: []
    }
  },
  methods: {
    changeHandler(curIndex,preIndex) {
      this.$emit('changeBack',this.banner[curIndex].imageUrl)
    },
    async getList(){
      const [err,res]=await this.rq.get('/banner?type=0')
      if(err) return
      this.banner=res.banners
      this.$emit('changeBack',this.banner[0].imageUrl)
    }
  },
  created() {
    this.getList()
  },
}
</script>

<style scoped lang="less">
.el-carousel__item {
  .el-carousel__button{
    width: 10px;
    height: 10px;
    background-color: #000;
  }
  .image{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img{
      height: 100%;
    }
  }
}


</style>