<template>
  <div class="home_section">
    <HomeTitle :tags="tagList" :title="title" />
    <div class="list">
      <SongList v-if="type === 'hot'" />
      <AlbumList v-if="type === 'new'" />
      <RankList v-if="type === 'rank'" />
    </div>
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle";
import SongList from "./SongList";
import AlbumList from "./AlbumList";
import RankList from "./RankList";

export default {
  props: {
    title: {
      type: String,
    },
    type: String,
    tagList: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      tags: [],
    };
  },
  name: "HomeSection",
  components: { RankList, AlbumList, SongList, HomeTitle },
  methods: {},
};
</script>

<style scoped lang="less">
.home_section {
  width: 945px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  .list {
    margin-top: 10px;
  }
}
</style>
