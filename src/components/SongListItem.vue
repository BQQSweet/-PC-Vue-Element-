<template>
  <div class="song_list_item">
    <div class="img">
      <img :src="itemData.coverImgUrl" alt="">
      <div class="masking">
        <div class="play_num">
          <span class="iconfont icon-BAI-erji"></span>
          <span>{{ itemData.playCount|numConvert }}</span>
        </div>
        <div class="play">
          <span class="iconfont icon-bofangqi-bofangshu"></span>
        </div>
      </div>
    </div>
    <div class="desc">{{ itemData.name }}</div>
  </div>
</template>

<script>
import numConvert from '../utils/number'

export default {
  props: {
    itemData: {
      type: Object
    }
  },
  name: "SongListItem",
  created() {
    // console.log(this.itemData)
  },
  filters: {
    numConvert: function (value) {
      return numConvert(value)
    }
  }
}
</script>

<style scoped lang="less">
.song_list_item {
  border: 4px solid #eeeeee;
  box-shadow: 5px 5px 15px #adadad;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;

  .img {
    position: relative;
    display: flex;


    img {
      width: 100%;

      &:after {
      }
    }

    .masking {
      height: 30px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);

      .play_num {
        display: flex;
        align-items: center;
      }

      span.iconfont {
        font-size: 26px;
      }

      .play {
        cursor: pointer;
      }
    }
  }
  .desc{
    padding: 2px;
    font-size: 14px;
  }

}
</style>