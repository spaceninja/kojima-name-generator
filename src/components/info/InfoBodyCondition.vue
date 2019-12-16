<template>
  <FormGroup
    label="What condition is your body currently in?"
    label-for="info-body-condition"
  >
    <AppInput
      id="info-body-condition"
      v-model="bodyCondition"
      @input="onInput"
    />
    <small class="form-help-text">
      Single word answer, e.g. “Bloated”.
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
