<template>
  <div>
    <h1>Galpões Cadastrados</h1>
    <input
      v-model="term"
      class="pesquisa"
      type="text"
      placeholder="Buscar Galpão"
    />
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="warehouse in filteredWarehouses" :key="warehouse.id">
          <td>{{ warehouse.code }}</td>
          <td>{{ warehouse.name }}</td>
          <td>{{ warehouse.city }}</td>
        </tr>
      </tbody>
    </table>

    <br />

    <div v-for="warehouse in warehouses" :key="warehouse.id">
      <Warehouse
        :id="warehouse.id"
        :name="warehouse.name"
        :code="warehouse.code"
        :address="warehouse.address"
        :city="warehouse.city"
        :area="warehouse.area"
        :description="warehouse.description"
      />
    </div>
  </div>
</template>

<script>
import Warehouse from "../components/Warehouse.vue";

export default {
  name: "WarehouseIndex",
  components: {
    Warehouse,
  },
  data() {
    return {
      warehouses: [],
      term: "",
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
  computed: {
    filteredWarehouses() {
      return this.warehouses.filter((warehouse) =>
        warehouse.name.toLowerCase().includes(this.term.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.pesquisa {
  width: 300px;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
}
table {
  border: 1px solid;
  border-collapse: collapse;
  width: 400px;
  margin: 0 auto;
}
</style>