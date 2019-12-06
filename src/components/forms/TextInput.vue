<template>
  <input
    v-if="type !== 'textarea'"
    class="form-control"
    :type="type"
    :value="value"
    @input="onInput"
  />
  <textarea
    v-else
    class="form-control"
    :type="type"
    :value="value"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
