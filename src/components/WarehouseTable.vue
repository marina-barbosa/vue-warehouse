<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Name</th>
        <th>Endereço</th>
        <th>Cidade</th>
        <th>Área</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="w in warehouses" :key="w.id">
        <td>{{ w.code }}</td>
        <td>{{ w.name }}</td>
        <td>{{ w.address }}</td>
        <td>{{ w.city }}</td>
        <td>{{ w.area }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "WarehouseTable",
  props: {
    warehouses: [],
  },
};
</script>

<style scoped>
</style>