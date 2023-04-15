<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimerComp :timeInSeconds="timeInSeconds" />
    <ButtonTimer
      @clicked="startCounting"
      icone="fas fa-play"
      text="play"
      :disabled="timerRunning"
    />
    <ButtonTimer
      @clicked="finishCounting"
      icone="fas fa-stop"
      text="stop"
      :disabled="!timerRunning"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonTimer from "./ButtonTimer.vue";
import TimerComp from "./TimerComp.vue";

export default defineComponent({
  name: "StopWatch",
  emits: ["finishTimer"],
  components: { TimerComp, ButtonTimer },
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
      this.$emit("finishTimer", this.timeInSeconds);
      this.timeInSeconds = 0;
    },
  },
});
</script>
