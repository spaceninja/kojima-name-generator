<template>
  <input
    v-if="type !== 'textarea'"
    class="form-control"
    :type="type"
    required
    :value="modelValue"
    @input="onInput"
  />
  <textarea
    v-else
    class="form-control"
    :type="type"
    :value="modelValue"
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
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
