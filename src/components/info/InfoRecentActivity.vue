<template>
  <FormGroup
    label="What is the last thing you did before starting this worksheet?"
    label-for="info-recent-activity"
  >
    <AppInput
      id="info-recent-activity"
      v-model="recentActivity"
      @input="onInput"
    />
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
      recentActivity: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.recentActivity);
    },
  },
};
</script>
