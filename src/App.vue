<template>
  <div id="app">
    <Main />
  </div>
</template>
<script>
import Main from "./components/Main";
export default {
  components: { Main },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "苹方", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 950px;
  background-color: #f6f6f6;
}
</style>
