<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo Alura Tracker" />
    </h1>
    <button class="button" @click="changeTheme">{{ textButton  }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarMenu",
  emits: ["onChangedTheme"],
  data() {
    return {
      darkModeActive: false,
    };
  },
  computed: {
    textButton() {
      if (this.darkModeActive) {
        return "Desativar modo escuro";
      }
      return "Ativar modo escuro";
    },
  },
  methods: {
    changeTheme() {
      this.darkModeActive = !this.darkModeActive;
      this.$emit("onChangedTheme", this.darkModeActive);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
