<template>
  <FormGroup
    label="If you had to define your personality in one word, what would it be?"
    label-for="info-personality"
  >
    <AppInput
      id="info-personality"
      v-model="personality"
      @update:modelValue="onInput"
    />
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
      personality: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.personality);
    },
  },
};
</script>
