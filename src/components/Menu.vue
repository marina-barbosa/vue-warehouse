<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar flat color="grey lighten-4">
            <v-toolbar-title>Warehouses</v-toolbar-title>
            <v-spacer></v-spacer>
            <nav>
              <v-btn text color="grey" to="/">Home </v-btn>
              <v-btn text color="grey" to="/warehouses"
                >Galpões Cadastrados
              </v-btn>
              <v-btn text color="grey" to="/warehouse/new"
                >Cadastrar Galpão
              </v-btn>
              <v-btn text color="grey" to="/about">About </v-btn>
            </nav>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>