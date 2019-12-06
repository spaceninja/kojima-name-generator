<template>
  <FormGroup
    label="If you had to define your personality in one word, what would it be?"
    label-for="info-personality"
  >
    <TextInput id="info-personality" v-model="personality" @input="onInput" />
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
      personality: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.personality);
    },
  },
};
</script>
