<template>
  <FormGroup
    label="How many carrots do you believe you could eat in one sitting?"
    label-for="info-carrots"
  >
    <AppInput id="info-carrots" v-model="carrots" @input="onInput" />
    <small class="form-help-text">
      If someone, like, forced you to eat as many carrots as possible?
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
      carrots: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.carrots);
    },
  },
};
</script>
