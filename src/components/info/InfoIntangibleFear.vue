<template>
  <FormGroup
    label="What is your greatest intangible fear?"
    label-for="info-intangible-fear"
  >
    <AppInput
      id="info-intangible-fear"
      v-model="intangibleFear"
      @update:modelValue="onInput"
    />
    <small class="form-help-text"> e.g. Death, Loneliness, Fear Itself. </small>
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
      intangibleFear: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.intangibleFear);
    },
  },
};
</script>
