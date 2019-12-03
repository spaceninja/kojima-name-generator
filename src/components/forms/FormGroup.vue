<template>
  <div class="form-group">
    <label :for="labelFor">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
