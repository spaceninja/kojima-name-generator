<template>
  <input
    :checked="modelValue"
    class="form-check-input"
    type="checkbox"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
};
</script>
