<template>
  <div>
    <select v-model="selected" @change="onChange">
      <option disabled value="">Please select one</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
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
