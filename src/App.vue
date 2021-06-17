<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "App",
  // mounted() {
  //   let data = {
  //     email: "bbb@gmail.com",
  //     password: "abc1123",
  //   };
  //   // this.register(data);
  //   this.login(data);
  // },
  // methods: {
  //   ...mapActions("user", ["register", "login", , "logout"]),
  // },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
