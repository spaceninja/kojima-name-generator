<template>
  <p>Your first name is “Naked.”</p>
</template>

<script>
export default {
  emits: ['change'],
  created() {
    this.$emit('change', 'Naked');
  },
};
</script>
