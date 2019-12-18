<template>
  <div id="app">
    <AppHeader />
    <KojimaName />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import KojimaName from './components/KojimaName.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    KojimaName,
    AppFooter,
  },
};
</script>

<style lang="scss">
// TODO: move to static file so this isn't inlined on every page or use min version
@import './assets/css/reboot.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Open+Sans:400,400i,700,700i&display=swap');

html,
body {
  height: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

// stylelint-disable selector-max-id
#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  > header,
  > footer {
    flex: none;
  }
}

main {
  flex: 1;
  margin: 0 auto;
  max-width: 1280px;
  padding: 1rem;

  @media screen and (min-width: 480px) {
    padding: 2rem;
  }
}

.name-form {
  margin-bottom: 2rem;
}

.category {
  margin: 2rem 0;

  @media screen and (min-width: 760px) {
    display: flex;
  }
}

.category__header {
  background: #eeeeee;
  flex: 0 0 30%;
  min-width: 250px;
  padding: 1rem;

  @media screen and (min-width: 760px) {
    margin-right: 2rem;
  }

  ul {
    font-size: 0.9em;
  }
}

.category__content {
  flex: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;

  strong {
    /* font-style: italic; */
  }
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: 1.5em;

  @media screen and (min-width: 480px) {
    font-size: 2em;
  }
}

h2 {
  font-size: 2em;

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
}

h4 {
  font-size: 1.25em;
}

h5,
h6 {
  font-size: 1em;
}

blockquote {
  font-style: italic;
}

.form-group {
  margin: 1em 0;
}

.form-actions {
  margin: 2rem 0 0;
  text-align: center;
}

legend {
  font-size: 1rem;
  font-weight: bold;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
  width: 100%;
}

.form-help-text {
  display: block;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 0.5rem;
  opacity: 0.75;
}

.form-check {
  display: flex;
}

.form-check-input {
  flex: none;
  margin-top: 0.25em;
}

.form-check-label {
  flex: 1;
  margin-bottom: 0;
  margin-left: 1rem;
}

.btn {
  background-color: #999999;
  border: 0;
  border-radius: 0.25em;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  height: 2em;
  letter-spacing: 0.05em;
  line-height: 2em;
  margin: 0.25rem 0.5rem;
  padding: 0 0.75em 0 0.7em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s;
  vertical-align: top;

  @media screen and (min-width: 375px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #666666;
    color: #ffffff;
  }
  .icon {
    background: rgba(0, 0, 0, 0) 0 0 no-repeat;
    display: inline-block;
    height: 1.33em;
    position: relative;
    top: 0.33em;
    width: 1.33em;
  }

  .label {
    display: inline-block;
    margin-left: 0.33em;
    vertical-align: top;
    white-space: nowrap;
  }
}

.btn-primary {
  background-color: red;

  &:hover,
  &:focus,
  &:active {
    background-color: maroon;
  }
}

.btn-twitter {
  background-color: #1b95e0;
  color: white;

  &:hover,
  &:focus,
  &:active {
    background-color: #0c7abf;
  }

  .icon {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E');
  }
}

.btn-facebook {
  background-color: #4267b2;
  color: white;

  &:hover,
  &:focus,
  &:active {
    background-color: #365899;
  }

  .icon {
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22icon%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M8%2014H3.667C2.733%2013.9%202%2013.167%202%2012.233V3.667A1.65%201.65%200%200%201%203.667%202h8.666A1.65%201.65%200%200%201%2014%203.667v8.566c0%20.934-.733%201.667-1.667%201.767H10v-3.967h1.3l.7-2.066h-2V6.933c0-.466.167-.9.867-.9H12v-1.8c.033%200-.933-.266-1.533-.266-1.267%200-2.434.7-2.467%202.133v1.867H6v2.066h2V14z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
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

  .category__header {
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-primary {
    background-color: maroon;

    &:hover,
    &:focus,
    &:active {
      background-color: red;
    }
  }
}
</style>
