<template>
  <BorderBox title="Info">
    <img :src="img" alt="info_image" class="info-img">
    <p>{{ info }}</p>
    <h2>Subpages</h2>
    <ul>
      <li v-for="page in pages" :key="page.url">
        <router-link :to="page.url">{{ page.title }}</router-link>
        <div class="tooltip">{{ page.info }}</div>
      </li>
    </ul>

    <h2>Socials</h2>
    <div class="socials">
      <a v-for="social in socials" :key="social.url" :href="social.url">
        <img :src="social.icon">
      </a>
    </div>


  </BorderBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import BorderBox from "@/components/BorderBox.vue";


export default defineComponent({
  name: "HomeView",
  components: {
    BorderBox,
  },
  data() {
    return {
        pages: [{url: "", title: "", info: ""}],
        info: "",
        img: "/info_image",
        socials: [{url: "", icon: ""}],
    };
  },
  async created() {
    const response = await axios.get(location.origin + "/info.json");
    this.pages = response.data.pages;
    this.info = response.data.info;
    this.img = response.data.img;
    this.socials = response.data.socials;
  },
});
</script>

<style scoped lang="scss">
ul {
  list-style-type: square;
}
li {
  position: relative;
  margin-bottom: 0.5em;

  .tooltip {
    display: none;
    position: absolute;
    bottom: 0;
    left: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
  }

  a {
    margin-right: 1em;
  }
}
li:hover {
  .tooltip {
    display: block;
  }
}
.info-img {
  width: 100%;
  max-width: 20em;
  margin-bottom: 1em;
}
.socials {
  display: flex;
  gap: 1em;

  img {
    width: 2em;
    opacity: 0.5;
  }
  img:hover {
    opacity: 1;
  }
}
</style>
