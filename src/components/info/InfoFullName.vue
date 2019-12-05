<template>
  <fieldset>
    <legend>What is your full name?</legend>

    <FormGroup label="First Name" label-for="first-name">
      <TextInput id="first-name" v-model="firstName" @input="onInput" />
    </FormGroup>

    <FormGroup label="Last Name" label-for="last-name">
      <TextInput id="last-name" v-model="lastName" @input="onInput" />
    </FormGroup>
  </fieldset>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import TextInput from '../forms/TextInput.vue';

export default {
  components: {
    FormGroup,
    TextInput,
  },
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
