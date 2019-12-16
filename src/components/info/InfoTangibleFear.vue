<template>
  <FormGroup
    label="What is your greatest tangible fear?"
    label-for="info-tangible-fear"
  >
    <AppInput id="info-tangible-fear" v-model="tangibleFear" @input="onInput" />
    <small class="form-help-text">
      Singular. e.g., “Horse”.
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
