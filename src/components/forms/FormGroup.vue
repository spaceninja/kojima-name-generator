<template functional>
  <div v-if="props.type === 'checkbox'" class="form-group form-check">
    <slot />
    <label class="form-check-label" :for="props.labelFor">
      {{ props.label }}
    </label>
  </div>
  <div v-else-if="props.type === 'actions'" class="form-group form-actions">
    <slot />
  </div>
  <div v-else class="form-group">
    <label class="form-label" :for="props.labelFor">
      {{ props.label }}
    </label>
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
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
};
</script>
