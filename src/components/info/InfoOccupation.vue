<template>
  <FormGroup
    label="What do you do at your occupation?"
    label-for="info-occupation"
  >
    <AppInput
      id="info-occupation"
      v-model="occupation"
      @update:modelValue="onInput"
    />
    <small class="form-help-text">
      Condense the verb in your answer into a single “-er” noun. (e.g. if you
      are a sheep farmer, your answer will be “Farmer.”)
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
      occupation: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.occupation);
    },
  },
};
</script>
