<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarMenu />
    </div>
    <div class="column is-three-quarter">
      <FormApp @onTaskSave="saveTask" />
      <div class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoxContainer v-if="emptyList">
          Você não está muito produtivo hoje :(
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
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
