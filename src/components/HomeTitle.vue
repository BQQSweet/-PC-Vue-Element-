<template>
  <div class="home_title">
    <div class="logo">
      <span class="iconfont icon-xingxing"></span>
    </div>
    <h3>{{ title }}</h3>
    <ul class="tags">
      <li class="tag" v-for="(item, index) in tags" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="more">
      <span>更多</span>
      <span class="iconfont icon-jiantou_yemian_xiangyou_o"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  name: "HomeTitle",
};
</script>

<style scoped lang="less">
.home_title {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 300px;
  border-bottom: 4px solid #8076a3;
  padding: 10px 0;

  .logo {
    color: #8076a3;
  }
  .tags {
    list-style: none;
    display: flex;
    margin-left: auto;
    li.tag {
      width: 40px;
      height: 20px;
      border: #8076a3 1px solid;
      border-radius: 50px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #8076a3;
        color: white;
      }
    }
  }
  .more {
    margin-left: auto;
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
