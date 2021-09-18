<template>
  <section class="category">
    <header class="category__header">
      <h4>You have a Horny Name</h4>
      <blockquote>
        <p>
          Kojima’s characters and stories are irrevocably horny. Weirdly horny,
          sure, but horny nonetheless.
        </p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Naked Snake (MGS3)</li>
        <li>Liquid Snake (MGS)</li>
        <li>Solid Snake (Metal Gear)</li>
      </ul>
    </header>
    <div class="category__content">
      <!-- 2.3 - InfoPetBreed -->
      <InfoPetBreed @change="setLastName" />

      <!--
      1. 2.12 - InfoMatterState
      2. "Your first name is 'Naked'"
      3. 2.06 - InfoSkill
      4. 2.14 - InfoZodiacSign
    -->
      <InfoMatterState v-if="firstNameCategory === 1" @change="setFirstName" />
      <InfoNaked v-if="firstNameCategory === 2" @change="setFirstName" />
      <InfoSkill v-if="firstNameCategory === 3" @change="setFirstName" />
      <InfoZodiacSign v-if="firstNameCategory === 4" @change="setFirstName" />

      <InfoLickable @change="setMiddleName" />
    </div>
  </section>
</template>

<script>
import getRandomInt from '../../scripts/get-random-integer';
import InfoPetBreed from '../info/InfoPetBreed.vue';
import InfoMatterState from '../info/InfoMatterState.vue';
import InfoNaked from '../info/InfoNaked.vue';
import InfoSkill from '../info/InfoSkill.vue';
import InfoZodiacSign from '../info/InfoZodiacSign.vue';
import InfoLickable from '../info/InfoLickable.vue';

export default {
  components: {
    InfoPetBreed,
    InfoMatterState,
    InfoNaked,
    InfoSkill,
    InfoZodiacSign,
    InfoLickable,
  },
  emits: ['name-change'],
  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
      firstNameCategory: getRandomInt(1, 4),
    };
  },
  computed: {
    fullName() {
      const combined = this.middleName
        ? `${this.firstName} ${this.middleName}`
        : this.firstName;
      return {
        firstName: combined,
        lastName: this.lastName,
      };
    },
  },
  methods: {
    setFirstName(firstName) {
      this.firstName = firstName;
      this.setName(this.fullName);
    },
    setMiddleName(middleName) {
      this.middleName = middleName;
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
