<template>
  <NavigationBar />
  <router-view class="router-view"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/NavigationBar.vue";


export default defineComponent({
  name: "App",
  components: {
    NavigationBar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex:1;
  display: flex;
  justify-content: center;
}
body {
  display: flex;
}
.navigation-bar {
  margin-top: 5em;
  position: fixed;
  left: 0;
}
.router-view {
  align-self: center;
  flex: 1;
}
@media screen and (min-width: 1000px) {
  .router-view {
    width: 1000px;
    flex: none;
  }
}

</style>
