<template>
  <div>
    <h4>You have a <strong>“The” Name</strong></h4>
    <blockquote>
      <p>
        Kojima loves to make people have names that start with the word “The”
        and they usually symbolize fears or unstoppable forces. You are now that
        unstoppable force.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>The Pain (MGS3)</li>
      <li>The Sorrow (MGS3)</li>
      <li>The Viscount (MGSV)</li>
    </ul>

    <!--
      1. 2.08 - InfoIntangibleFear
      2. 2.09 - InfoTangibleFear
      3. 2.04 - InfoEmbarrassingMemory
      4. 3.20 - InfoMilitaryHardware
    -->
    <InfoIntangibleFear v-if="firstNameCategory === 1" @change="setfirstName" />
    <InfoTangibleFear v-if="firstNameCategory === 2" @change="setfirstName" />
    <InfoEmbarrassingMemory
      v-if="firstNameCategory === 3"
      @change="setfirstName"
    />
    <InfoMilitaryHardware
      v-if="firstNameCategory === 4"
      @change="setfirstName"
    />
  </div>
</template>

<script>
import getRandomInt from '../../scripts/get-random-integer';
import InfoIntangibleFear from '../info/InfoIntangibleFear.vue';
import InfoTangibleFear from '../info/InfoTangibleFear.vue';
import InfoEmbarrassingMemory from '../info/InfoEmbarrassingMemory.vue';
import InfoMilitaryHardware from '../info/InfoMilitaryHardware.vue';

export default {
  components: {
    InfoIntangibleFear,
    InfoTangibleFear,
    InfoEmbarrassingMemory,
    InfoMilitaryHardware,
  },
  data() {
    return {
      firstName: '',
      firstNameCategory: getRandomInt(1, 4),
    };
  },
  computed: {
    /**
     * Full Name = First Name, No Last Name
     *
     * The worksheet says the first name should be "The" and the value the user
     * fills in should be the last name. However, to avoid duplicate "The" if
     * the user also has the `isThe` condition, we instead just set that
     * condition directly. As a result we have to leave one name blank, and we
     * don't want to leave first name blank, because if the `isClone` condition
     * is true, it steals the last name slot. So setting the user's input as
     * the first name gives us the most flexibility.
     */
    fullName() {
      return {
        firstName: this.firstName,
        lastName: '',
      };
    },
  },
  methods: {
    setfirstName(firstName) {
      this.firstName = firstName;
      this.setName(this.fullName);
    },
    setName(name) {
      this.$emit('conditions-change', { isThe: true });
      this.$emit('name-change', name);
    },
  },
};
</script>
