<template>
  <p>Your first name is “Naked.”</p>
</template>

<script>
export default {
  created() {
    this.$emit('change', 'Naked');
  },
};
</script>
