<template>
    <BorderBox title="Poetry">
        <div class="poetry-view">
            <div class="poem" v-for="[idx, poem] in poems.entries()" :key="idx" :id="String(idx)">
                <h2>{{ poem.title }}</h2>
                <p class="poetry-line" v-for="line in poem.lines.entries()" :key="line[0]">
                    {{ line[1] }}
                </p>
                <p class="author">~SaySaeqo</p>
            </div>
        </div>
        <vue-cusdis
            :attrs="{
            host: 'https://cusdis.com',
            appId: '72045998-e06e-4430-a256-117c5fb15049',
            pageId: location.hash,
            pageTitle: 'Poetry',
            pageUrl: location,
            }"
            class="comments"
        ></vue-cusdis>
    </BorderBox>
</template>

<script lang="ts">
import BorderBox from "@/components/BorderBox.vue";
import { defineComponent } from "vue";
import axios from "axios";
import VueCusdis from "vue-cusdis";

export default defineComponent({
    name: "PoetryView",
    components: {
        BorderBox,
        VueCusdis,
    },
    data() {
        return {
            poems: [{title: "", lines: [""]}],
            location: window.location,
        };
    },
    async created() {
        const response = await axios.get(location.origin + "/poetry.txt");
        let title = "";
        let lines = [];
        this.poems = [];
        for (const line of response.data.trim().split("\n")) {
            if (!line) {
                this.poems.push({title: title, lines: lines});
                title = "";
                lines = [];
            } else if (!title) {
                title = line;
            } else {
                lines.push(line);
            }
        }
        if (lines.length) {
            this.poems.push({title: title, lines: lines});
        }
    },
});

</script>

<style scoped lang="scss">
.poetry-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    p, h2 {
        margin: 0;
    }
    h2 {
        margin-bottom: 0.5em;
    }
    .poetry-line {
        text-indent: -2em;
        margin-left: 2em;
        min-height: 1em;
    }
}
.poem {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0.3em;
    margin-bottom: 4em;
    flex: 1;

    .author {
        margin-top: 0.5em;
        margin-left: 2em;
    }
}
.comments {
    width: 100%;
    max-width: 800px;
    height: 40em;
    display: flex;
}
</style>