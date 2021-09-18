<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option disabled value="">Please select one</option>
    <template v-if="simple">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </template>
    <template v-else>
      <option
        v-for="(option, index) in options"
        :key="`${option.value}-${index}`"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </template>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
};
</script>
