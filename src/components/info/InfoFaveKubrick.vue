<template>
  <FormGroup
    label="What is your favorite Kubrick film?"
    label-for="info-fave-kubrick-film"
  >
    <AppSelect
      id="info-fave-kubrick-film"
      v-model="faveKubrickFilm"
      :options="options"
      @update:modelValue="onChange"
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
  emits: ['change'],
  data() {
    return {
      faveKubrickFilm: '',
      options: [
        { text: 'Eyes Wide Shut', value: 'Shut' },
        { text: 'Full Metal Jacket', value: 'Jacket' },
        { text: 'The Shining', value: 'Shining' },
        { text: 'Barry Lyndon', value: 'Lyndon' },
        { text: 'A Clockwork Orange', value: 'Orange' },
        { text: '2001: A Space Odyssey', value: 'Odyssey' },
        { text: 'Dr. Strangelove', value: 'Strangelove' },
        { text: 'Lolita', value: 'Lolita' },
        { text: 'Spartacus', value: 'Spartacus' },
        { text: 'Paths of Glory', value: 'Glory' },
        { text: 'The Killing', value: 'Killing' },
        { text: 'Killer’s Kiss', value: 'Kiss' },
        { text: 'Fear and Desire', value: 'Desire' },
      ],
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.faveKubrickFilm);
    },
  },
};
</script>
