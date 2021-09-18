<template>
  <FormGroup
    label="If you feel like it, your middle name can be “Lickable.” I won’t stop you."
    label-for="info-lickable"
    type="checkbox"
  >
    <AppCheckbox
      id="info-lickable"
      v-model="lickable"
      @update:modelValue="onChange"
    />
  </FormGroup>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import AppCheckbox from '../forms/AppCheckbox.vue';

export default {
  components: {
    FormGroup,
    AppCheckbox,
  },
  emits: ['change'],
  data() {
    return {
      lickable: false,
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.lickable ? '“Lickable”' : '');
    },
  },
};
</script>
