<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkModeActive }"
  >
    <div class="column is-one-quarter">
      <SidebarMenu @onChangedTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <router-view> </router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",
  components: { SidebarMenu },
  data() {
    return {
      tasks: [] as ITask[],
      darkModeActive: false,
    };
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
    changeTheme(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive;
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
