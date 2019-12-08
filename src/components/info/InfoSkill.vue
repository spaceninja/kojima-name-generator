<template>
  <FormGroup label="What is something you are good at?" label-for="info-skill">
    <TextInput id="info-skill" v-model="skill" @input="onInput" />
    <small class="form-help-text">Verb ending in “-ing”.</small>
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
      skill: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.skill);
    },
  },
};
</script>
