<template>
  <FormGroup
    label="What is the object you’d least like to be stabbed by?"
    label-for="info-stabbed"
  >
    <AppInput id="info-stabbed" v-model="stabbed" @input="onInput" />
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
      stabbed: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.stabbed);
    },
  },
};
</script>
