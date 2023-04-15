<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarMenu />
    </div>
    <div class="column is-three-quarter">
      <FormApp />
      <div class="list">
        <TaskItem />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import FormApp from "./components/FormApp.vue";
import TaskItem from "./components/TaskItem.vue";

export default defineComponent({
  name: "App",
  components: { SidebarMenu, FormApp, TaskItem },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
