<template>
  <div class="custom-button">
    <button @click="handleClick">{{ buttonLabel }}</button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  data() {
    return {
      buttonLabel: "Clique aqui",
    };
  },
  methods: {
    handleClick() {
      this.buttonLabel = "Você clicou no botão!";
    },
  },
};
</script>

<style scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.custom-button button {
  background-color: #42b883; /* Cor verde da logo do Vue.js */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.custom-button button:hover {
  background-color: #35495e; /* Cor azul escuro da logo do Vue.js */
}
</style>
