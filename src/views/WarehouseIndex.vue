<template>
  <div>
    <h1>Galpões Cadastrados</h1>

    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="warehouse in warehouses" :key="warehouse.id">
          <td>{{ warehouse.code }}</td>
          <td>{{ warehouse.name }}</td>
          <td>{{ warehouse.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WarehouseIndex",
  data() {
    return {
      warehouses: [],
    };
  },
  async mounted() {
    this.getWarehouses();
  },
  methods: {
    async getWarehouses() {
      const response = await this.$http.get(
        "http://localhost:3000/api/v1/warehouses"
      );
      this.warehouses = await response.json();
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid;
  border-collapse: collapse;
  width: 400px;
  margin: 0 auto;
}
</style>