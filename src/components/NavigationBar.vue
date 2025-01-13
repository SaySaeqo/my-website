<template>
    <nav class="navigation-bar" :class="isOpen ? 'open' : ''">
      <img src="../assets/hamburger-menu.svg" class="hamburger-menu" @click="isOpen = !isOpen">
      <router-link v-for="page in pages" :key="page.url"
        :to="page.url" :style="onBigScreen ? 'display:flex;' : ''">
        <img :src="page.icon">
        <p>{{ page.title }}</p>
      </router-link>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
  name: "NavigationBar",
  data() {
    return {
        pages: [{url: "", title: "", info: "", icon: ""}],
        info: "",
        img: "/info_image",
        socials: [{url: "", icon: ""}],
        isOpen: false,
        onBigScreen: false,
    };
  },
  async created() {
    const response = await axios.get(location.origin + "/info.json");
    this.pages = response.data.pages;
    this.info = response.data.info;
    this.img = response.data.img;
    this.socials = response.data.socials;
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.onBigScreen = window.innerWidth > 1100;
    },
  },
});
</script>
  
<style scoped>

.navigation-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img.hamburger-menu {
    background-color: #f8f9fa;
    outline: #2c3e50  1px solid;
  }
  img.hamburger-menu:hover {
    cursor: pointer;
  }
  img {
    height: 3em;
    padding: 0.5em;
  }
  a {
    display: none;
    align-items: center;
    text-decoration: none;
    width: 4em;
    overflow: hidden;
    background-color: #f8f9fa;
    outline: #2c3e50  1px solid;
    border-top: 0;

    p {
      margin: 0;
      padding: 0;
      font-size: large;
      max-height: 3em;
    }

  }
  a:hover {
    width: 20em;
    padding-right: 2em;
  }
  a:visited {
    color: inherit;
  }

}

nav.open {
  a {
    width: 20em;
    padding-right: 1em;
    display: flex;
  }
}
  
</style>
  