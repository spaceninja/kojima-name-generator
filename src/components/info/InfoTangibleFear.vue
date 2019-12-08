<template>
  <FormGroup
    label="What is your greatest tangible fear?"
    label-for="info-tangible-fear"
  >
    <TextInput
      id="info-tangible-fear"
      v-model="tangibleFear"
      @input="onInput"
    />
    <small class="form-help-text">
      Singular. e.g., “Horse”.
    </small>
  </FormGroup>
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
      tangibleFear: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.tangibleFear);
    },
  },
};
</script>
