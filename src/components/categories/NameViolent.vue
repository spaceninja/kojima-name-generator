<template>
  <div>
    <h4>You have a <strong>Violent Name</strong></h4>
    <blockquote>
      <p>
        Sometimes, a Kojima name can be very threatening and violent, like
        Sniper Wolf, or The Fury. Now you can also be threatening and violent.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Machinegun Kid (Metal Gear)</li>
      <li>Sniper Wolf (MGS)</li>
      <li>The Fury (MGS3)</li>
    </ul>

    <!-- 2.05 - InfoStabbed -->
    <InfoStabbed @change="setLastName" />

    <!--
      1. 3.19 - InfoNPRScience
      2. 2.12 - InfoMatterState
      3. 3.20 - InfoMilitaryHardware
      4. 2.09 - InfoTangibleFear
    -->
    <InfoNPRScience v-if="firstNameCategory === 1" @change="setFirstName" />
    <InfoMatterState v-if="firstNameCategory === 2" @change="setFirstName" />
    <InfoMilitaryHardware
      v-if="firstNameCategory === 3"
      @change="setFirstName"
    />
    <InfoTangibleFear v-if="firstNameCategory === 4" @change="setFirstName" />
  </div>
</template>

<script>
import getRandomInt from '../../scripts/get-random-integer';
import InfoStabbed from '../info/InfoStabbed.vue';
import InfoNPRScience from '../info/InfoNPRScience.vue';
import InfoMatterState from '../info/InfoMatterState.vue';
import InfoMilitaryHardware from '../info/InfoMilitaryHardware.vue';
import InfoTangibleFear from '../info/InfoTangibleFear.vue';

export default {
  components: {
    InfoStabbed,
    InfoNPRScience,
    InfoMatterState,
    InfoMilitaryHardware,
    InfoTangibleFear,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      firstNameCategory: getRandomInt(1, 4),
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
  },
};
</script>
