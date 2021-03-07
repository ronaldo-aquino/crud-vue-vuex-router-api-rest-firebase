<template>
  <h1>Editar {{ $route.params.id }}</h1>
  <form @submit.prevent="atualizarTarefa(tarefa)">
    <Input :tarefa="tarefa" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input";
export default {
  name: "Editar",

  components: {
    Input,
  },

  computed: {
    ...mapState(["tarefa"]),
  },

  methods: {
    ...mapActions(["setTarefaId", "atualizarTarefa"]),
  },

  created() {
    const tarefaId = this.$route.params.id;
    this.setTarefaId(tarefaId);
  },
};
</script>

<style scoped>
</style>>