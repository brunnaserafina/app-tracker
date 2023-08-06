<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo Alura Tracker" />
    </h1>
    <button class="button" @click="changeTheme">{{ textButton }}</button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </router-link>
          <router-link to="/projetos">
            <i class="fas fa-project-diagram"></i>
            projetos
          </router-link>
        </li>
      </ul>
    </nav>
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
        return "🌞";
      }
      return "🌛";
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

img {
  width: 80%;
}

button {
  background-color: #94b9ff;
  border: none;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
