<template>
  <div class="column is-three-quarter content">
    <FormApp @onTaskSave="saveTask" />
    <div class="list">
      <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
      <BoxContainer v-if="emptyList">
        Você não está muito produtivo(a) hoje :(
      </BoxContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormApp from "../components/FormApp.vue";
import TaskItem from "../components/TaskItem.vue";
import ITask from "../interfaces/ITask";
import BoxContainer from "../components/BoxContainer.vue";

export default defineComponent({
  name: "App",
  components: { FormApp, TaskItem, BoxContainer },
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
