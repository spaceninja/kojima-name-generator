<template>
  <select v-model="selected" @change="onChange">
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
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>
