<template>
  <FormGroup
    label="What is a word your name kind of sounds like?"
    label-for="info-name-homonym"
  >
    <AppInput id="info-name-homonym" v-model="nameHomonym" @input="onInput" />
    <small class="form-help-text">
      Emphasis on “kind of.” e.g. Brian: Brain; Travis: Starfish; Scott:
      Scorpion;
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
