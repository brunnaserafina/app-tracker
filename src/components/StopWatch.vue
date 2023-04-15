<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimerComp :timeInSeconds="timeInSeconds" />
    <button class="button" @click="startCounting" :disabled="timerRunning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finishCounting" :disabled="!timerRunning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerComp from "./TimerComp.vue";

export default defineComponent({
  name: "StopWatch",
  components: { TimerComp },
  data() {
    return {
      timeInSeconds: 0,
      timer: 0,
      timerRunning: false,
    };
  },
  methods: {
    startCounting() {
      this.timerRunning = true;
      this.timer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    finishCounting() {
      this.timerRunning = false;
      clearInterval(this.timer);
    },
  },
});
</script>
