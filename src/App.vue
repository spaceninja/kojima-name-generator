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
// TODO: move to static file so this isn't inlined on every page or use min version
@import './assets/css/reboot.css';

body {
  margin: 2rem;
}

h1 {
  font-size: 2em;
  font-weight: 200;
}

h2 {
  font-size: 4em;
  font-weight: 200;
  margin: 0.5em 0;

  strong {
    font-weight: 800;
  }
}

h3,
h4 {
  font-size: 1.5em;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
}

h4 {
  font-size: 1.25em;
}

h5,
h6 {
  font-size: 1em;
  font-weight: 700;
}

blockquote {
  font-style: italic;
}
</style>
