<template>
  <FormGroup
    label="What is your favorite Joy Division album?"
    label-for="info-fave-joy-division"
  >
    <AppSelect
      id="info-fave-joy-division"
      v-model="faveJoyDivision"
      :options="options"
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
      faveJoyDivision: '',
      options: [
        { text: 'An Ideal for Living', value: 'Ideal' },
        { text: 'Unknown Pleasures', value: 'Unknown' },
        { text: 'Closer', value: 'Closer' },
        { text: 'Still', value: 'Still' },
        { text: 'Substance', value: 'Substance' },
        { text: 'Heart and Soul', value: 'Heart' },
        { text: 'The Peel Sessions', value: 'Peel' },
      ],
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.faveJoyDivision);
    },
  },
};
</script>
