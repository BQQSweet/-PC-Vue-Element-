<template>
  <div class="main">
    <NavBar></NavBar>
    <div class="router_view">
      <router-view/>
    </div>
    <div class="player">
      <Player/>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Player from "./Player";

export default {
  name: "Main",
  components: {Player, NavBar},
}
</script>

<style scoped lang="less">
.router_view{
  padding-bottom:50px;
}
</style>