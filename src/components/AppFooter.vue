<template>
  <footer key="footer">
    <p>
      Based on the
      <a
        href="https://www.polygon.com/videos/2019/11/11/20959269/unraveled-kojima-name-generator-death-stranding"
        >Kojima Name Generator</a
      >
      worksheet by
      <a href="https://twitter.com/briamgilbert">Brian David Gilbert</a>.
      Adapted by <a href="https://twitter.com/spaceninja">Scott Vandehey</a>.
    </p>
    <blockquote>
      <p>“Hey, Kojima? You can’t just name a dude Die-Hardman.”</p>
    </blockquote>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: #eee;
  font-size: 0.8rem;
  padding: 1rem;
  text-align: center;

  @media screen and (min-width: 480px) {
    padding: 2rem;
  }
}

p {
  margin: 0;
}

blockquote {
  margin: 0.5em 0 0;
}

@media (prefers-color-scheme: dark) {
  footer {
    background: rgb(255 255 255 / 10%);
  }
}
</style>
