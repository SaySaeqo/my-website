<template>
    <BorderBox class="poetry-view" title="Poetry">
        Poetry content
    </BorderBox>
</template>

<script lang="ts">
import BorderBox from "@/components/BorderBox.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "PoetryView",
    components: {
        BorderBox,
    },
});

</script>

<style scoped lang="scss"></style>