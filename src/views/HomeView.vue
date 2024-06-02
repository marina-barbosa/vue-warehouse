<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CustomButton />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CustomButton,
  },
};
</script>
