<template>
  <BorderBox :title="t('title')" class="not-found">
    <p>{{ t("description") }}</p>
    <RouterLink to="/">{{ t("return") }}</RouterLink>
  </BorderBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BorderBox from "../components/BorderBox.vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";


export default defineComponent({
  name: "NotFound",
  components: {
    BorderBox,

  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t, locale };
  },
});
</script>

<style scoped lang="scss">
</style>

<i18n>
  {
    "en": {
      "title": "404 Not Found",
      "description": "This page does not exist.",
      "return": "Go back to home page"
    },
    "pl": {
      "title": "404 Not Found",
      "description": "Ta strona nie istnieje.",
      "return": "Wróć do strony głównej"
    }
  }
</i18n>