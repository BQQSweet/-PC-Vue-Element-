<template>
  <div id="find_music">
    <div class="carousel">
      <div class="front_banner">
        <Carousel @changeBack="changeBack"></Carousel>
      </div>
      <div :style="backImg" class="back_img"></div>
    </div>
    <div class="sections">
      <HomeSection
        :tagList="['华语', '流行', '摇滚', '民谣', '电子']"
        type="hot"
        title="热门推荐"
      />
      <HomeSection type="new" title="新碟上架" />
      <HomeSection type="rank" title="榜单" />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import HomeSection from "../components/HomeSection";

export default {
  name: "FindMusic",
  components: { HomeSection, Carousel },
  data() {
    return {
      backImg: {
        background: "",
      },
    };
  },
  methods: {
    changeBack(url) {
      this.backImg = {
        backgroundImage: `url('${url}')`,
      };
    },
  },
};
</script>

<style scoped lang="less">
#find_music {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .carousel {
    width: 100%;
    position: relative;
    overflow: hidden;

    .back_img {
      position: absolute;
      width: 110%;
      height: 110%;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      filter: blur(10px);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.6s;
    }
  }

  .sections {
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
