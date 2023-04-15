<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarMenu />
    </div>
    <div class="column is-three-quarter">
      <FormApp @onTaskSave="saveTask" />
      <div class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task " />
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

export default defineComponent({
  name: "App",
  components: { SidebarMenu, FormApp, TaskItem },
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
