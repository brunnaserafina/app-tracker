<template>
  <button class="button" @click="clicked" :disabled="disabled">
    <span class="icon">
      <i :class="icone"></i>
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonTimer",
  emits: ["clicked"],
  props: {
    disabled: {
      type: Boolean,
    },
    icone: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    clicked(): void {
      this.$emit("clicked");
    },
  },
});
</script>
