<template>
  <FormGroup
    label="What’s your most embarrassing childhood memory?"
    label-for="info-embarrasing-memory"
  >
    <TextInput id="info-embarrasing-memory" v-model="memory" @input="onInput" />
    <small class="form-help-text">
      Condense this story into two words.
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
