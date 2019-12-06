<template>
  <FormGroup
    label="What is the object you’d least like to be stabbed by?"
    label-for="info-stabbed"
  >
    <TextInput id="info-stabbed" v-model="stabbed" @input="onInput" />
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
