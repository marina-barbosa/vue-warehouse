<template>
  <div>
    <h1>Cadastrar Galpão</h1>

    <div class="container">
      <v-alert v-if="msg != null" type="info">{{ msg }}</v-alert>
      <form v-on:submit.prevent>
        <div class="form">
          <v-text-field label="Código" v-model="form.code"></v-text-field>
          <v-text-field label="Nome" v-model="form.name"></v-text-field>
          <v-text-field label="Endereço" v-model="form.address"></v-text-field>
          <v-text-field label="Cidade" v-model="form.city"></v-text-field>
          <v-text-field label="Cep" v-model="form.cep"></v-text-field>
          <v-text-field label="Área em m²" v-model="form.area"></v-text-field>
          <v-textarea label="Descrição" v-model="form.description"></v-textarea>
        </div>
        <div class="form">
          <v-btn color="primary" v-on:click="postWarehouse()">Cadastrar</v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarehouseNew",
  data() {
    return {
      msg: null,
      form: {
        code: null,
        name: null,
        address: null,
        city: null,
        cep: null,
        area: null,
        description: null,
      },
    };
  },
  methods: {
    async postWarehouse() {
      try {
        await this.$http.post(
          "http://localhost:3000/api/v1/warehouses",
          this.form
        );
        this.msg = "Galpão cadastrado com sucesso!";
      } catch (err) {
        this.msg = "Erro ao cadastrar o galpão!";
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 15px;
}
.form input {
  margin: 8px;
}
</style>