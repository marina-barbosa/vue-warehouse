<template>
  <div>
    <h1>Galpões Cadastrados</h1>
    <button v-on:click="getWarehouses()">Carregar dados</button>
  </div>
</template>

<script>
export default {
  name: "WarehouseIndex",
  async mounted() {
    this.getWarehouses();
  },
  methods: {
    async getWarehouses() {
      const response = await this.$http.get(
        "http://localhost:3000/api/v1/warehouses"
      );
      const warehouses = await response.json();
      console.log(warehouses);
    },
  },
};
</script>

<style scoped>
</style>