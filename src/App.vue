<template>
  <PageInfo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageInfo from "./components/PageInfo.vue";


export default defineComponent({
  name: "App",
  components: {
    PageInfo,
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
}
body {
  display: flex;
}
.page-info {
}
</style>
