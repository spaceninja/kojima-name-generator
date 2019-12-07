<template>
  <FormGroup
    label="What is your favorite state of matter?"
    label-for="info-matter-state"
  >
    <AppSelect
      id="info-matter-state"
      v-model="matterState"
      :options="options"
      :simple="true"
      @change="onChange"
    />
  </FormGroup>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import AppSelect from '../forms/AppSelect.vue';

export default {
  components: {
    FormGroup,
    AppSelect,
  },
  data() {
    return {
      matterState: '',
      options: ['Solid', 'Liquid', 'Gaseous', 'Plasma'],
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.matterState);
    },
  },
};
</script>
