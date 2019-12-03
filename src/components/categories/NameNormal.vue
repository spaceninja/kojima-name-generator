<template>
  <div>
    <h4>You have a <strong>Normal Name</strong></h4>
    <blockquote>
      <p>
        Kojima’s early work includes lots of characters that have names that are
        widely considered to be “normal.” Was this just because, in the early
        years, he didn’t have the power to say, “I’m Hideo Kojima, I can name
        someone Die-Hardman if I want to” without people questioning him?
        Probably.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Ed Brown (Policenauts)</li>
      <li>Michael Saito (Policenauts)</li>
      <li>Ivan Rodriguez (Snatcher)</li>
    </ul>

    <FormGroup label="First Name" label-for="first-name">
      <TextInput id="first-name" v-model="firstName" @input="onInput" />
    </FormGroup>

    <FormGroup label="Last Name" label-for="last-name">
      <TextInput id="last-name" v-model="lastName" @input="onInput" />
    </FormGroup>

    <button @click="onInput">
      Set Name
    </button>
  </div>
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
  methods: {
    onInput() {
      const name = { firstName: this.firstName, lastName: this.lastName };
      this.$emit('name-change', name);
    },
  },
};
</script>
