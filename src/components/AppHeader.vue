<template>
  <header key="header">
    <h1>Kojima Name Generator</h1>
    <p>
      <span>You are born to Hideo Kojima: How does he name you?</span>
      <span>Follow our comprehensive guide to finding your Kojima Name.</span>
    </p>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: #eee;
  padding: 1rem;
  text-align: center;

  @media screen and (width >= 480px) {
    padding: 2rem;
  }
}

h1 {
  font-size: 3em;
  line-height: 1.1;
  margin: 0 0 0.25em;
  text-transform: uppercase;

  @supports (font-size: clamp(1px, 1em, 2px)) {
    --min-font-size: 30px;
    --max-font-size: 80px;
    --scaler: 6vw;
    font-size: clamp(var(--min-font-size), var(--scaler), var(--max-font-size));
  }
}

p {
  margin: 0;
}

span {
  margin-right: 0.25em;

  @media screen and (width >= 480px) {
    display: inline-block;
    margin: 0.25em 0.25em 0;
  }
}

@media (prefers-color-scheme: dark) {
  header {
    background: rgb(255 255 255 / 10%);
  }
}
</style>
