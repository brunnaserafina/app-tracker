<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxContainer",
});
</script>

<style scoped>
.box {
  background-color: #94B9FF;
}
</style>
