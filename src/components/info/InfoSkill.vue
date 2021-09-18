<template>
  <FormGroup label="What is something you are good at?" label-for="info-skill">
    <AppInput id="info-skill" v-model="skill" @update:modelValue="onInput" />
    <small class="form-help-text">Verb ending in “-ing”.</small>
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
      skill: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.skill);
    },
  },
};
</script>
