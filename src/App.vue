<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <header>
    <Navbar/>

  </header>
  <main>
     <router-view></router-view>
  </main>
  <footer></footer>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}


header {
  position: fixed;
  z-index: 2;
  background-color: #1a2456;
  width: 100%;
  margin-top: 10px;
}

</style>
