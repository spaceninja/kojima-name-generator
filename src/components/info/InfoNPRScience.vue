<template>
  <FormGroup
    label="What is a scientific term you picked up from listening to NPR once?"
    label-for="info-npr-science"
  >
    <AppInput
      id="info-npr-science"
      v-model="NPRScience"
      @update:modelValue="onInput"
    />
    <small class="form-help-text">
      It doesn’t matter if you know what it means, if it’s a cool-sounding word.
    </small>
  </FormGroup>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import AppInput from '../forms/AppInput.vue';

export default {
  components: {
    FormGroup,
    AppInput,
  },
  emits: ['change'],
  data() {
    return {
      NPRScience: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.NPRScience);
    },
  },
};
</script>
