<template>
  <FormGroup
    label="Who is your favorite film character?"
    label-for="info-favorite-kurt-russell"
  >
    <AppSelect
      id="info-favorite-kurt-russell"
      v-model="faveKurtRussell"
      :options="options"
      @change="onChange"
    />
    <small class="form-help-text">
      (NOTE: must be played by Kurt Russell)
    </small>
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
      faveKurtRussell: '',
      options: [
        { text: 'Santa Claus (The Christmas Chronicles', value: 'Santa' },
        { text: 'Ego (Guardians of the Galaxy)', value: 'Ego' },
        { text: 'Mr. Nobody (Fast and the Furious', value: 'Mr. Nobody' },
        { text: 'John Ruth (the Hateful Eight)', value: 'John' },
        { text: 'Sheriff Hunt (Bone Tomahawk)', value: 'Sheriff Hunt' },
        { text: 'Stuntman Mike (Death Proof)', value: 'Stuntman Mike' },
        { text: 'The Commander (Sky High)', value: 'Commander' },
        { text: 'McCabe (Vanilla Sky)', value: 'McCabe' },
        { text: 'Jack O’Neil (Stargate)', value: 'Jack' },
        { text: 'Elvis Presley (Forrest Gump)', value: 'Elvis' },
        { text: 'Wyatt Earp (Tombstone)', value: 'Wyatt' },
        { text: 'Captain Ron (Captain Ron)', value: 'Captain Ron' },
        { text: 'Gabriel Cash (Tango and Cash)', value: 'Cash' },
        { text: 'Jack Burton (Big Trouble in Little China)', value: 'Jack' },
        { text: 'MacReady (The Thing)', value: 'MacReady' },
        { text: 'Snake Plissken (Escape from New York)', value: 'Snake' },
        { text: 'Copper (The Fox and the Hound)', value: 'Copper' },
      ],
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.faveKurtRussell);
    },
  },
};
</script>
