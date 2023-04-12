<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarMenu />
    </div>
    <div class="column is-three-quarter">
      <FormApp />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import FormApp from "./components/FormApp.vue";

export default defineComponent({
  name: "App",
  components: { SidebarMenu, FormApp },
});
</script>

<style></style>
