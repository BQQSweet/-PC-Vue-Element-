<template>
  <div class="song_list">
    <div v-for="item in songList" class="list_item">
      <SongListItem :itemData="item"/>
    </div>
  </div>
</template>

<script>
import SongListItem from "./SongListItem";

export default {
  name: "SongList",
  components: {SongListItem},
  data() {
    return {
      songList: [],
      updateTime: 0,
      pageSize: 8
    }
  },
  methods: {
    async getList() {
      const updateTime = this.updateTime
      const [err, res] = await this.rq.get(`/top/playlist/highquality?limit=${this.pageSize}&updateTime=${updateTime}`)
      if (err) return
      this.songList = res.playlists
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style scoped lang="less">
.song_list {
  display: flex;
  flex-wrap: wrap;

  .list_item {
    flex-basis: calc(100% / 4);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>