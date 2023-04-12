<template>
  <main class="colums is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarMenu />
    </div>
    <div class="column is-three-quarter"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";

export default defineComponent({
  name: "App",
  components: { SidebarMenu },
});
</script>

<style></style>
