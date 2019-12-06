<template>
  <FormGroup
    label="What condition is your body currently in?"
    label-for="info-body-condition"
  >
    <TextInput
      id="info-body-condition"
      v-model="bodyCondition"
      @input="onInput"
    />
    <small class="form-help-text">
      (single word answer)
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
      bodyCondition: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.bodyCondition);
    },
  },
};
</script>
