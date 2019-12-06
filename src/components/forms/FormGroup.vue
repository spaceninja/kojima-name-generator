<template functional>
  <div class="form-group">
    <label :for="props.labelFor">{{ props.label }}</label>
    <slot />
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
