<template>
  <FormGroup
    label="What is your greatest intangible fear?"
    label-for="info-intangible-fear"
  >
    <TextInput
      id="info-intangible-fear"
      v-model="intangibleFear"
      @input="onInput"
    />
    <small class="form-help-text">
      (e.g. death, loneliness, fear itself)
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
