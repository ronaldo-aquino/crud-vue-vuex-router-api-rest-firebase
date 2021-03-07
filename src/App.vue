<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },

  methods: {
    ...mapActions(["addLocalStorage"]),
  },

  created() {
    this.addLocalStorage();
  },
};
</script>