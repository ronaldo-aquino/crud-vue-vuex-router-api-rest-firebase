<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Digite seu nome aqui..."
    v-model.trim="tarefa.nome"
  />

  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="tarefa.categorias"
      value="javascript"
    />
    <label for="check-1" class="form-check-label">Javascript</label>
  </div>

  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarefa.categorias"
      value="nodejs"
    />
    <label for="check-2" class="form-check-label">Node.js</label>
  </div>

  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        type="radio"
        id="radio-1"
        class="form-check-input"
        value="urgente"
        v-model="tarefa.estado"
      />
      <label for="radio-1" class="form-check-label">Urgente</label>
    </div>

    <div class="form-check form-check-inline">
      <input
        type="radio"
        id="radio-2"
        class="form-check-input"
        value="normal"
        v-model="tarefa.estado"
      />
      <label for="radio-2" class="form-check-label">Normal</label>
    </div>
  </div>

  <div class="mt-2">
    <input type="number" v-model.number="tarefa.numero" class="form-control" />
  </div>

  <button
    class="btn btn-dark btn-block mt-2"
    type="submit"
    :disabled="bloquear"
  >
    Processar
  </button>
</template>

<script>
export default {
  name: "Input",

  props: {
    tarefa: Object,
  },

  computed: {
    bloquear() {
      return this.tarefa.nome.trim() === "" ? true : false;
    },
  },
};
</script>

<style scoped>
</style>