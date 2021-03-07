import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    tarefas: [],
    tarefa: {
      id: "",
      nome: "",
      categorias: [],
      estado: "",
      numero: 0,
    },
  },

  mutations: {
    carregar(state, payload) {
      state.tarefas = payload;
    },

    set(state, payload) {
      state.tarefas.unshift(payload);
    },

    excluir(state, payload) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== payload);
    },

    tarefa(state, payload) {
      if (!state.tarefas.find((tarefa) => tarefa.id === payload)) {
        router.push("/");
        return;
      }
      state.tarefa = state.tarefas.find((tarefa) => tarefa.id === payload);
    },

    atualizar(state, payload) {
      state.tarefas = state.tarefas.map((tarefa) =>
        tarefa.id === payload.id ? payload : tarefa
      );

      router.push("/");
    },
  },
  actions: {
    async addLocalStorage({ commit }) {
      try {
        const url =
          "https://fir-api-rest-vue-default-rtdb.firebaseio.com/tarefas.json";

        const res = await fetch(url);
        const dataDB = await res.json();

        const arrayTarefa = [];

        for (let id in dataDB) {
          arrayTarefa.push(dataDB[id]);
        }

        commit("carregar", arrayTarefa);
      } catch (error) {
        console.log(error);
      }
    },

    async setTarefa({ commit }, tarefa) {
      try {
        const url = `https://fir-api-rest-vue-default-rtdb.firebaseio.com/tarefas/${tarefa.id}.json`;

        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Types": "application/json",
          },
          body: JSON.stringify(tarefa),
        });

        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.log(error);
      }

      commit("set", tarefa);
    },

    async deletarTarefa({ commit }, id) {
      try {
        const url = `https://fir-api-rest-vue-default-rtdb.firebaseio.com/tarefas/${id}.json`;

        await fetch(url, {
          method: "DELETE",
        });

        commit("excluir", id);
      } catch (error) {
        console.log(error);
      }
    },

    setTarefaId({ commit }, id) {
      commit("tarefa", id);
    },

    async atualizarTarefa({ commit }, tarefa) {
      try {
        const url = `https://fir-api-rest-vue-default-rtdb.firebaseio.com/tarefas/${tarefa.id}.json`;

        const res = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify(tarefa),
        });
        const dataDB = await res.json();

        commit("atualizar", dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
