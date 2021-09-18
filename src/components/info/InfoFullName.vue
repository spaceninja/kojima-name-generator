<template>
  <fieldset>
    <legend>What is your full name?</legend>

    <FormGroup label="First Name" label-for="first-name">
      <AppInput
        id="first-name"
        v-model="firstName"
        @update:modelValue="onInput"
      />
    </FormGroup>

    <FormGroup label="Last Name" label-for="last-name">
      <AppInput
        id="last-name"
        v-model="lastName"
        @update:modelValue="onInput"
      />
    </FormGroup>
  </fieldset>
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
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
      };
    },
  },
  methods: {
    onInput() {
      this.$emit('change', this.fullName);
    },
  },
};
</script>
