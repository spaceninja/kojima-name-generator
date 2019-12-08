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
  margin: 1rem;

  @media screen and (min-width: 480px) {
    margin: 2rem;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: rgb(38, 50, 56);
    color: rgba(255, 255, 255, 0.5);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(255, 255, 255, 0.75);
  }

  input {
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    color: currentColor;
  }
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: 1.5em;
  font-weight: 200;

  @media screen and (min-width: 480px) {
    font-size: 2em;
  }
}

h2 {
  font-size: 2em;
  font-weight: 200;

  strong {
    font-weight: 800;
  }

  @media screen and (min-width: 375px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 480px) {
    font-size: 3em;
  }

  @media screen and (min-width: 640px) {
    font-size: 4em;
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

.form-group {
  margin: 1em 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
}

.form-help-text {
  display: block;
  margin-top: 0.25rem;
  opacity: 75%;
}
</style>
