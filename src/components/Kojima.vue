<template>
  <div>Random number between 1 and 20 = {{ getRandomInt(1, 20) }}</div>
</template>

<script>
export default {
  methods: {
    /**
     * Get a Random Integer Between Two Values
     *
     * Returns a random integer between (and inclusive of) the specified values.
     *
     * @see http://mdn.io/math.random
     */
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$green: #42b983;
</style>
