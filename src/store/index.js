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
      localStorage.setItem("tarefas", JSON.stringify(state.tarefas));
    },

    excluir(state, payload) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== payload);
      localStorage.setItem("tarefas", JSON.stringify(state.tarefas));
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
      localStorage.setItem("tarefas", JSON.stringify(state.tarefas));
    },
  },
  actions: {
    addLocalStorage({ commit }) {
      if (localStorage.getItem("tarefas")) {
        const tarefasLocal = JSON.parse(localStorage.getItem("tarefas"));
        commit("carregar", tarefasLocal);
        return;
      }

      localStorage.setItem("tarefas", JSON.stringify([]));
    },

    setTarefa({ commit }, tarefa) {
      commit("set", tarefa);
    },

    deletarTarefa({ commit }, id) {
      commit("excluir", id);
    },

    setTarefaId({ commit }, id) {
      commit("tarefa", id);
    },

    atualizarTarefa({ commit }, tarefa) {
      commit("atualizar", tarefa);
    },
  },
  modules: {},
});
