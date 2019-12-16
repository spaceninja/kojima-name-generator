<template>
  <FormGroup
    label="What’s your most embarrassing childhood memory?"
    label-for="info-embarrasing-memory"
  >
    <AppInput id="info-embarrasing-memory" v-model="memory" @input="onInput" />
    <small class="form-help-text">
      Condense this story into two words.
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
      memory: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.memory);
    },
  },
};
</script>
