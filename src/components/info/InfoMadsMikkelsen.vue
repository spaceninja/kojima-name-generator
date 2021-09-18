<template>
  <FormGroup
    label="What is something you’d enjoy watching Mads Mikkelsen do?"
    label-for="info-mads-activity"
  >
    <AppInput
      id="info-mads-activity"
      v-model="madsActivity"
      @update:modelValue="onInput"
    />
    <small class="form-help-text"> Condense into one word. </small>
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
      madsActivity: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.madsActivity);
    },
  },
};
</script>
