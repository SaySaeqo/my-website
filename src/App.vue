<template>
  <h1>Subpages</h1>
  <ul ref="subpages">
    <li v-for="page in pages" :key="page">
      <a :href="page">{{ page }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
  name: "App",
  data() {
    return {
        pages: []
    };
  },
  async created() {
    const response = await axios.get(location.origin + "/subpages.json");
    this.pages = response.data.pages;
  },
});
</script>

<style scoped>
ul {
  list-style-type: square;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
