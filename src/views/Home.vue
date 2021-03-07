<template>
  <form @submit.prevent="processarFormulario" class="mb-3">
    <Input :tarefa="tarefa" />
  </form>

  <ListaTarefas />
</template>

<script>
import Input from "../components/Input";
import ListaTarefas from "../components/ListaTarefas";
import { mapActions } from "vuex";
import shortid from "shortid";

export default {
  name: "Home",
  components: {
    Input,
    ListaTarefas,
  },

  data() {
    return {
      tarefa: {
        id: "",
        nome: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },

  methods: {
    ...mapActions(["setTarefa"]),
    processarFormulario() {
      if (this.tarefa.nome.trim() === "") {
        console.log("Campo vazio");
        return;
      }

      this.tarefa.id = shortid.generate();

      this.setTarefa(this.tarefa);

      console.log(this.tarefa);

      this.tarefa = { id: "", nome: "", categorias: [], estado: "", numero: 0 };
    },
  },
};
</script>
