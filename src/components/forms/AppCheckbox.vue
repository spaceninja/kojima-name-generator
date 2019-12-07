<template>
  <input
    :checked="checked"
    class="form-check-input"
    type="checkbox"
    @change="onChange"
  />
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.checked);
    },
  },
};
</script>
