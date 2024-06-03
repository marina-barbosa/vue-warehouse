<template>
  <div>
    <h1>Cadastrar Galpão</h1>

    <div class="container">
      <div>{{ msg }}</div>
      <form v-on:submit.prevent>
        <div class="form">
          <label for="code">Código: </label>
          <input
            type="text"
            id="code"
            v-model="form.code"
            placeholder="Código do galpão"
          />
        </div>
        <div class="form">
          <label for="name">Nome: </label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Nome do galpão"
          />
        </div>
        <div class="form">
          <label for="address">Endereço: </label>
          <input
            type="text"
            id="address"
            v-model="form.address"
            placeholder="Endereço do galpão"
          />
        </div>
        <div class="form">
          <label for="city">Cidade: </label>
          <input
            type="text"
            id="city"
            v-model="form.city"
            placeholder="Cidade"
          />
        </div>
        <div class="form">
          <label for="cep">Cep: </label>
          <input type="text" id="cep" v-model="form.cep" placeholder="CEP" />
        </div>
        <div class="form">
          <label for="area">Área m²: </label>
          <input
            type="number"
            id="area"
            v-model="form.area"
            placeholder="Area"
          />
        </div>
        <div class="form">
          <label for="description">Descrição: </label>
          <textarea
            id="description"
            cols="30"
            rows="5"
            v-model="form.description"
          />
        </div>
        <div class="form">
          <button v-on:click="postWarehouse()">Cadastrar</button>
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