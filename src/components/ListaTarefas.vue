<template>
  {{ tarefas }}
  <table class="table">
    <thead>
      <tr>
        <th scope="col">##</th>
        <th scope="col">Nome</th>
        <th scope="col">categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Número</th>
        <th scope="col">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tarefas" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nome }}</td>
        <td>{{ item.categorias.join(", ") }}</td>
        <td>{{ item.estado }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button
            class="btn btn-danger btn-sm mr-2"
            @click="deletarTarefa(item.id)"
          >
            Excluir
          </button>
          <router-link
            class="btn btn-warning btn-sm"
            :to="{
              name: 'Editar',
              params: {
                id: item.id,
              },
            }"
          >
            Editar
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ListaTarefas",

  computed: {
    ...mapState(["tarefas"]),
  },

  methods: {
    ...mapActions(["deletarTarefa"]),
  },
};
</script>

<style scoped>
</style>