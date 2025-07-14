<template>
  <main>
    <NavigationBar />
    <router-view class="router-view"/>
  </main>
  <footer>
    <select v-model="$i18n.locale" class="language-select">
      <option>pl</option>
      <option>en</option>
    </select>
    <p>© 2025 SaySaeqo</p>
  </footer>
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
  flex-direction: column;
  justify-content: space-between;
}

main {
  display: flex;
  justify-content: center;
}
body {
  display: flex;
  min-height: 100vh;
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

.language-select {
  width: 3em;
  height: 2em;
  background-color: #f8f9fa;
  font-size: large;
  margin: 0;
  cursor: pointer;
}

footer {
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  align-items: center;

  p {
    margin: 0;
  }
}

.language-select:hover {
  background-color: #e9ecef;
}

</style>
