<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descrição da tarefa</div>
      <div class="column">
        <TimerComp />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerComp from "./TimerComp.vue";

export default defineComponent({
  name: "TaskItem",
  components: {
    TimerComp,
  },
});
</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>
