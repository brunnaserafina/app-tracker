<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="description"
        />
      </div>
      <div class="column">
        <StopWatch @finishTimer="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopWatch from "./StopWatch.vue";

export default defineComponent({
  name: "FormApp",
  components: { StopWatch },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    finishTask(elapsedTime: number): void {
      console.log(elapsedTime);
      this.description = "";
    },
  },
});
</script>
