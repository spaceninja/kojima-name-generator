<template>
  <div v-if="type === 'checkbox'" class="form-group form-check">
    <slot />
    <label class="form-check-label" :for="labelFor">
      {{ label }}
    </label>
  </div>
  <div v-else-if="type === 'actions'" class="form-group form-actions">
    <slot />
  </div>
  <div v-else class="form-group">
    <label class="form-label" :for="labelFor">
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    labelFor: {
      type: String,
      default: null,
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
