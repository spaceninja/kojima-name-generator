<template>
  <input
    v-if="type !== 'textarea'"
    :type="type"
    :value="value"
    @input="onInput"
  />
  <textarea v-else :type="type" :value="value" @input="onInput" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
