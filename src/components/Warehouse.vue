<template>
  <div class="card">
    <h3>{{ id }} - {{ name }} - {{ code }}</h3>
    <address>
      <strong>{{ address }}</strong>
      <p>{{ city }}</p>
      <p>{{ area }}</p>
      <p>{{ description }}</p>
    </address>
  </div>
</template>

<script>
export default {
  name: "Warehouse",
  props: {
    id: Number,
    name: String,
    code: String,
    address: String,
    city: String,
    area: Number,
    description: String,
  },
};
</script>

<style scoped>
.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h3 {
  margin-top: 0;
  font-size: 20px;
  color: #333;
}

address {
  font-style: normal;
}

strong {
  font-weight: bold;
}

p {
  margin: 5px 0;
}
</style>