<template>
  <BoxContainer>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || "Tarefa sem descrição" }}
      </div>
      <div class="column">
        <TimerComp :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerComp from "./TimerComp.vue";
import ITask from "../interfaces/ITask";
import BoxContainer from "./BoxContainer.vue";

export default defineComponent({
  name: "TaskItem",
  components: {
    TimerComp,
    BoxContainer,
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>

