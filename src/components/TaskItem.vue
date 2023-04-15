<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <TimerComp :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerComp from "./TimerComp.vue";
import ITask from "../interfaces/ITask";

export default defineComponent({
  name: "TaskItem",
  components: {
    TimerComp,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>
