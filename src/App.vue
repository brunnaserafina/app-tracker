<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkModeActive }"
  >
    <div class="column is-one-quarter">
      <SidebarMenu @onChangedTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <FormApp @onTaskSave="saveTask" />
      <div class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoxContainer v-if="emptyList">
          Você não está muito produtivo(a) hoje :(
        </BoxContainer>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import FormApp from "./components/FormApp.vue";
import TaskItem from "./components/TaskItem.vue";
import ITask from "./interfaces/ITask";
import BoxContainer from "./components/BoxContainer.vue";

export default defineComponent({
  name: "App",
  components: { SidebarMenu, FormApp, TaskItem, BoxContainer },
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
