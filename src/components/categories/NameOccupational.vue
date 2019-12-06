<template>
  <div>
    <h4>You have an <strong>Occupational Name</strong></h4>
    <blockquote>
      <p>
        Kojima’s characters tend to be driven by the work that they do. That
        often carries over to their names. You, too, can be nothing more than
        your job.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Deadman (Death Stranding)</li>
      <li>Fire Trooper (Metal Gear)</li>
      <li>Sam Porter Bridges (Death Stranding)</li>
    </ul>

    <InfoOccupation @change="setLastName" />

    <InfoMatterState @change="setMatter" />

    <InfoZodiacSign @change="setZodiac" />

    <button
      @click="$emit('name-change', { firstName: 'Fire', lastName: 'Trooper' })"
    >
      Set Name
    </button>
  </div>
</template>

<script>
import InfoOccupation from '../info/InfoOccupation.vue';
import InfoMatterState from '../info/InfoMatterState.vue';
import InfoZodiacSign from '../info/InfoZodiacSign.vue';

export default {
  components: {
    InfoOccupation,
    InfoMatterState,
    InfoZodiacSign,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
      };
    },
  },
  methods: {
    setFirstName(firstName) {
      this.firstName = firstName;
      this.setName(this.fullName);
    },
    setLastName(lastName) {
      this.lastName = lastName;
      this.setName(this.fullName);
    },
    setName(name) {
      this.$emit('name-change', name);
    },
    setMatter(state) {
      console.log('MATTER STATE', state);
    },
    setZodiac(sign) {
      console.log('ZODIAC SIGN', sign);
    },
  },
};
</script>
