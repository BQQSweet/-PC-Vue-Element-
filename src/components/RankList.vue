<template>
  <div class="rankList">
    <ul>
      <li class="list_box" v-for="item1 in detailList">
        <div class="name">{{ item1.name }}</div>
        <div class="list">
          <ul class="list_items">
            <li :class="{item:true,light:rank%2!==0}" v-for="(item2,rank) in item1.detail">
              <a href="#" @click="play(item2.id,$event)">
                <span class="rank">{{ rank + 1 }}</span>
                <span class="song_name">{{ item2.al.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "RankList",
  data() {
    return {
      list: [],
      detailList: []
    }
  },
  async created() {
    const [err, res] = await this.getList()
    res.list.splice(3)
    this.list = res.list
    if (err) return
    await this.getDetail(this.list[0].id)
    await this.getDetail(this.list[1].id)
    await this.getDetail(this.list[2].id)
  },
  methods: {
    ...mapActions([
      'getSongData'
    ]),
    play(id,e) {
      e.preventDefault()
      this.getSongData(id)
    },
    async getList() {
      const res = await this.rq.get(`/toplist/detail`)
      return Promise.resolve(res)
    },
    async getDetail(id) {
      const [err, res] = await this.rq.get(`/playlist/detail?id=${id}`)
      if (err) return
      const obj = {}
      obj.detail = res.playlist.tracks.slice(0, 10)
      obj.name = res.playlist.name
      this.detailList.push(obj)
    }
  },
}
</script>

<style scoped lang="less">
.rankList {
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    li.list_box {
      width: 0;
      flex: 1;
      background-color: #f3f3f3;
      border: 1px solid #b1b1b1;

      .name {
        height: 150px;
      }

      .list_items {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #ccc;

        .light {
          background-color: #f3f3f3;
        }

        .item {
          height: 40px;
          box-sizing: border-box;
          padding: 0 10px;
          width: inherit;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .song_name {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
            margin-left: 10px;
          }

          a:link, a:hover, a:visited {
            text-decoration: none;
            color: black;
          }
        }
      }
    }
  }
}
</style>