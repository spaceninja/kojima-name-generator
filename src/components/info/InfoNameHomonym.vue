<template>
  <FormGroup
    label="What is a word your name kind of sounds like?"
    label-for="info-name-homonym"
  >
    <TextInput id="info-name-homonym" v-model="nameHomonym" @input="onInput" />
    <small class="form-help-text">
      (e.g. Brian -> Brain)
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
      nameHomonym: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.nameHomonym);
    },
  },
};
</script>
