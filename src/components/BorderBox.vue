<template>
    <div class="border-box">
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BorderBox",
    props: {
        title: {
            type: String,
            default: "Subpage"
        },
    },
});
</script>

<style scoped lang="scss">
.border-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: #ccc 1px solid;
  align-items: center;
  padding: 0.5em;
  padding-top: 0;
}
</style>