<template>
  <FormGroup label="What is your Zodiac sign?" label-for="info-zodiac-sign">
    <AppSelect
      id="info-zodiac-sign"
      v-model="zodiacSign"
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
      zodiacSign: '',
      options: [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces',
        'Rat',
        'Ox',
        'Tiger',
        'Rabbit',
        'Dragon',
        'Snake',
        'Horse',
        'Goat',
        'Monkey',
        'Rooster',
        'Dog',
        'Pig',
      ],
    };
  },
  methods: {
    onChange() {
      this.$emit('change', this.zodiacSign);
    },
  },
};
</script>
