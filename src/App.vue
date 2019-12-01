<template>
  <div id="app">
    <Header />
    <Kojima />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Kojima from './components/Kojima.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Kojima,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/css/reboot.css';

body {
  margin: 2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

blockquote {
  font-style: italic;
}
</style>
