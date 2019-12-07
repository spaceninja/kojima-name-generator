<template>
  <FormGroup
    label="What is something you’d enjoy watching Mads Mikkelsen do?"
    label-for="info-mads-activity"
  >
    <TextInput
      id="info-mads-activity"
      v-model="madsActivity"
      @input="onInput"
    />
    <small class="form-help-text">
      Please condense into one word.
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
      madsActivity: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.madsActivity);
    },
  },
};
</script>
