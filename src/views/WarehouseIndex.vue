<template>
  <div>
    <h1>Galpões Cadastrados</h1>
    <v-text-field
      label="Buscar Galpão"
      v-model="term"
      class="my-5"
    ></v-text-field>

    <v-card dark>
      <v-card-text>
        <WarehouseTable :warehouses="filteredWarehouses" />
      </v-card-text>
    </v-card>

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
import WarehouseTable from "../components/WarehouseTable.vue";

export default {
  name: "WarehouseIndex",
  components: {
    Warehouse,
    WarehouseTable,
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