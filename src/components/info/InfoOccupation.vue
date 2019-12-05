<template>
  <fieldset>
    <legend>What do you do at your occupation?</legend>

    <FormGroup label="Occupation as a single “-er” noun" label-for="occupation">
      <TextInput id="occupation" v-model="occupation" @input="onInput" />
      <small class="form-help-text">
        Condense the verb in your answer into a single “-er” noun. (e.g. if you
        are a sheep farmer, your answer will be “Farmer.”)
      </small>
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
