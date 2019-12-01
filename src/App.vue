<template>
  <div id="app">
    <header>
      <h1>Kojima Name Generator</h1>
    </header>
    <hr />
    <main>
      <Kojima msg="Welcome to Your Vue.js App" />
    </main>
    <hr />
    <footer>
      fine print
    </footer>
  </div>
</template>

<script>
import Kojima from './components/Kojima.vue';

export default {
  name: 'App',
  components: {
    Kojima,
  },
};
</script>

<style lang="scss">
@import './assets/css/reboot.css';
</style>
