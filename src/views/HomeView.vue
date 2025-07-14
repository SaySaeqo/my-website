<template>
  <BorderBox :title="$t('info.title')" class="home-view">
    <img :src="img" alt="info_image" class="info-img">
    <p v-html="t('info.text')"></p>
    <h2>{{ t('subpages') }}</h2>
    <ul>
      <li v-for="page in pages" :key="page.url">
        <router-link v-if="!page.isExternal" :to="page.url">{{ $t(page.key + ".title") }}</router-link>
        <a v-else :href="page.url">
          {{ $t(page.key + ".title") }}
          <span v-if="page.key==='pythonanywhere' && pythonAnywhereActive">🟢</span>
          <span v-else-if="page.key==='pythonanywhere' && !pythonAnywhereActive">🔴</span>
        </a>
        <div class="tooltip">{{ $t(page.key + ".description") }}</div>
      </li>
    </ul>

    <h2>{{ t('socials') }}</h2>
    <div class="socials">
      <div class="social" v-for="social in socials" :key="social.url">
        <a :href="social.url"><img :src="social.icon"></a>
        <div class="tooltip">{{ social.name }}</div>
      </div>
    </div>


  </BorderBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import BorderBox from "@/components/BorderBox.vue";
import { useI18n } from "vue-i18n";
import { isPythonAnywhereActive } from "@/common";


export default defineComponent({
  name: "HomeView",
  components: {
    BorderBox,
  },
  data() {
    return {
        pages: [{url: "", key: "", icon: "", isExternal: false}],
        img: "/info_image",
        socials: [{url: "", icon: "", name: ""}],
        pythonAnywhereActive: false,
    };
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t, locale };
  },
  async created() {
    const response = await axios.get(location.origin + "/info.json");
    this.pages = response.data.pages;
    this.img = response.data.img;
    this.socials = response.data.socials;
    this.pythonAnywhereActive = await isPythonAnywhereActive();
  },
});
</script>

<style scoped lang="scss">
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
ul {
  list-style-type: square;
}
li {
  position: relative;
  margin-bottom: 0.5em;

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
  .social {
    position: relative;

    .tooltip {
      bottom: 100%;
    }
  }
  .social:hover {
    .tooltip {
      display: block;
    }
  }
}

.home-view {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .home-view p {
    padding: 0 4em;
  }
  .home-view {
    width: 800px;
  }
}
</style>

<i18n>
{
  "en": {
    "info.text": "Hi. I usually go by the nickname <strong>SaySaeqo</strong>. I graduated from the Computer Science program at Gdańsk University of Technology. Currently, I am studying Space Technologies at 4 different universities (mainly at Gdańsk University of Technology XD). I mainly focus on drawing and programming. Recently, I have been programming mostly in Python or JS. I draw with the intention of creating comics. I also have several years of experience writing on PBF sites, which I still want to return to. This site is meant to be a collection of my existence on the internet. You will find here primarily links to external sites, but also to my projects and more. 🙂 If you have any questions, feel free to write: <a href='mailto:saysaeqo{'@'}gmail.com'>saysaeqo{'@'}gmail.com</a>.<br /> <i>~Last modified 2025.07.14",
    "subpages": "Subpages",
    "socials": "Socials"
  },
  "pl": {
    "info.text": "Cześć. Zazwyczaj posługuję się pseudonimem <strong>SaySaeqo</strong>. Skończyłem studia informatyczne na Politechnice Gdańskiej. Obecnie studiuję Technologie Kosmiczne na 4 różnych uczelniach (ale głównie na Politechnice Gdańskiej XD). Głównie zajmuję się rysowaniem i programowaniem. Ostatnio najczęściej programuję w Pythonie lub JS. Rysuję z myślą o tworzeniu komiksów. Mam również kilkuletnie doświadczenie w pisaniu na stronach typu PBF, do których jeszcze chcę wrócić. Ta strona ma być zbiorem mojej egzystencji w internecie. Znajdziesz tutaj przede wszystkim odnośniki do zewnętrznych stron, ale również do moich projektów i inne. 🙂 W razie pytań napisz: <a href='mailto:saysaeqo{'@'}gmail.com'>saysaeqo{'@'}gmail.com</a>.<br /> <i>~Ostatnio zmodyfikowano 2025.07.14",
    "subpages": "Podstrony",
    "socials": "Zobacz również"
  }
}
</i18n>