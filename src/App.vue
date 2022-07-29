<script>
import SorteosPage from "./components/sorteos/SorteosPage.vue";
import Navbar from "./components/ui/Navbar.vue";
export default {
  components: {
    SorteosPage,
    Navbar,
  },
  methods: {},
  data() {
    return {
      tags: [],
    };
  },
};
</script>

<template>
  <Navbar />
  <!-- <SorteosPage /> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
