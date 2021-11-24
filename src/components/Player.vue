<template>
  <div class="player">
    <div class="audio_custom">
      <div class="float">
        <span class="iconfont icon-shangyishou"></span>
        <div ref="animate" :class="{rotate:true,paused:!isPlay,active:isPlay}" class="player_img">
          <img @click="control" src="../assets/player.png" alt="altText"/>
        </div>
        <span class="iconfont icon-xiayishou"></span>
      </div>
      <div class="progress">
        <div :style="{width:activeLength+'%'}" class="active"></div>
      </div>
      <span>{{ currentTimeFormat }}/{{ timeFormat }}</span>
    </div>
    <audio style="position: absolute;opacity: 0" @canplay="getDuration" @timeupdate="updateTime" ref="audio"
           @pause="pause" @play="play" controls autoplay
           :src="currentSong.url"></audio>
  </div>
</template>

<script>
import formatTime from '../utils/time'

export default {
  name: "Player",
  data() {
    return {
      isPlay: false,
      timeFormat: "00:00",
      time: 0,
      currentTimeFormat: "00:00",
      currentTime: 0,
      url: "",
      activeLength: 0
    }
  },
  methods: {
    control() {
      if (this.isPlay) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }

    },
    getDuration() {
      // console.log(this.$refs.audio.duration); //此时可以获取到duration
      this.timeFormat = formatTime(this.$refs.audio.duration)
      this.time = this.$refs.audio.duration
    },
    updateTime(e) {
      this.currentTimeFormat = formatTime(e.target.currentTime);  //获取audio当前播放时间
      this.currentTime = e.target.currentTime
      this.activeLength = (this.currentTime / this.time) * 100
    },
    pause() {
      this.isPlay = false
    },
    play() {
      this.isPlay = true
    }
  },
  computed: {
    currentSong() {
      if (this.$store.state.currentSong && this.$store.state.currentSong.url) {
        this.isPlay = true
      }
      return this.$store.state.currentSong;
    }
  }
}
</script>

<style scoped lang="less">
@keyframes a {
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
}

.player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(234, 234, 234);
  border-top: 1px solid #ccc;
  z-index: 99;

  .audio_custom {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    .float {
      display: flex;
      align-items: center;
      left: 10px;
      position: absolute;
      top: -90px;

      .iconfont {
        font-size: 50px;
        color: #8076a3;
        cursor: pointer;
      }

      .rotate {
        animation-name: a;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }

      .active {
        animation-play-state: running;
      }

      .paused {
        animation-play-state: paused;
      }

      .player_img {
        padding: 8px;
        background-color: #e8e8e8;
        border: 4px solid #8076a3;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      img {
        width: 100%;
      }
    }

    .progress {
      width: 400px;
      height: 6px;
      border-radius: 6px;
      background-color: #ffffff;
      position: relative;
      box-shadow: 0 0 4px #bababa inset;

      .active {
        border-radius: 6px;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #8076a3;
        box-shadow: 0 0 4px #4c4c4c inset;
      }

      .active:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #8076a3;
        border: 1px solid #fff;
        border-radius: 50%;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
      }
    }
  }
}
</style>