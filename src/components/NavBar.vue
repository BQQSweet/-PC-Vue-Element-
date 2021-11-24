<template>
  <div class="nav_bar">
    <div class="nav_bar_link_box">
      <ul class="nav_bar_link">
        <li
          @click="changeRoute(item.path)"
          v-for="(item, index) in linkList"
          :key="index"
        >
          <router-link :to="item.path">
            <span>{{ item.title }}</span>
            <div
              v-if="curRoute === item.path"
              class="active_line animated rubberBand"
            ></div>
            <div v-if="curRoute === item.path" class="triangle"></div>
          </router-link>
        </li>
      </ul>
      <div class="search_box">
        <input type="text" />
      </div>
      <div class="center">创作者中心</div>
      <div class="login">登录</div>
    </div>
    <div class="tail"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      curRoute: "/find_music",
      linkList: [
        {
          title: "发现音乐",
          path: "/find_music",
        },
        {
          title: "我的音乐",
          path: "/my_music",
        },
        {
          title: "朋友",
          path: "/friend",
        },
        {
          title: "商城",
          path: "/shop",
        },
        {
          title: "音乐人",
          path: "/musician",
        },
        {
          title: "下载客户端",
          path: "/download",
        },
      ],
    };
  },
  methods: {
    changeRoute(path) {
      this.curRoute = path;
    },
  },
};
</script>

<style scoped lang="less">
.nav_bar {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #e2e1e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  //position: relative;
  .nav_bar_link_box {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    .nav_bar_link {
      height: 100%;
      display: flex;
      list-style: none;
      transition: all 0.3s;

      li {
        height: 100%;
      }
    }

    .search_box {
      input {
        width: 100px;
        height: 30px;
        border-radius: 30px;
        border: none;
        padding: 0 5px;
        transition: all 0.3s;
      }

      input:focus {
        width: 200px;
      }
    }

    .center,
    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      color: rgba(0, 0, 0, 0.5);
      margin: 0 10px;
      cursor: pointer;

      &:hover {
        border: 1px solid rgba(0, 0, 0, 1);
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  .tail {
    box-sizing: border-box;
    width: 100%;
    background-color: #8076a3;
    top: 60px;
    border: 1px solid #535353;
    z-index: 2;
  }

  img.logo {
    width: 200px;
    height: 50px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    position: relative;
    height: 100%;
    z-index: 1;

    .active_line {
      position: absolute;
      width: 80%;
      height: 10px;
      border-radius: 10px;
      background-color: #8076a3;
      z-index: -1;
    }

    .triangle {
      position: absolute;
      width: 0;
      height: 0;
      border-width: 8px;
      border-style: solid dashed dashed dashed;
      border-color: transparent transparent #8076a3 transparent;
      bottom: 0;
    }
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
@media screen and (max-width: 950px) {
  .search_box {
    input:focus {
      width: 100px !important;
    }
  }
}
</style>
