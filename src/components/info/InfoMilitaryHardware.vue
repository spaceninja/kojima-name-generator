<template>
  <FormGroup
    label="What is a piece of military hardware you think looks cool even though war is bad?"
    label-for="info-military-hardware"
  >
    <AppInput
      id="info-military-hardware"
      v-model="militaryHardware"
      @input="onInput"
    />
    <small class="form-help-text">
      Singular. e.g., “Railgun”.
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
      militaryHardware: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.militaryHardware);
    },
  },
};
</script>
