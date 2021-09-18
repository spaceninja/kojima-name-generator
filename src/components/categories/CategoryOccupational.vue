<template>
  <section class="category">
    <header class="category__header">
      <h4>You have an Occupational Name</h4>
      <blockquote>
        <p>
          Kojima’s characters tend to be driven by the work that they do. That
          often carries over to their names. You, too, can be nothing more than
          your job.
        </p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Fire Trooper (Metal Gear)</li>
        <li>Para-Medic (MGS3)</li>
        <li>Sam Porter Bridges (Death Stranding)</li>
      </ul>
    </header>
    <div class="category__content">
      <!-- 2.2 - InfoOccupation -->
      <InfoOccupation @change="setLastName" />

      <!--
      1. 2.15 - InfoPersonality
      2. 2.06 - InfoSkill
      3. 2.13 - InfoNameHomonym
      4. 3.16 - InfoFaveKurtRussell
    -->
      <InfoPersonality v-if="firstNameCategory === 1" @change="setFirstName" />
      <InfoSkill v-if="firstNameCategory === 2" @change="setFirstName" />
      <InfoNameHomonym v-if="firstNameCategory === 3" @change="setFirstName" />
      <InfoFaveKurtRussell
        v-if="firstNameCategory === 4"
        @change="setFirstName"
      />
    </div>
  </section>
</template>

<script>
import getRandomInt from '../../scripts/get-random-integer';
import InfoOccupation from '../info/InfoOccupation.vue';
import InfoPersonality from '../info/InfoPersonality.vue';
import InfoSkill from '../info/InfoSkill.vue';
import InfoNameHomonym from '../info/InfoNameHomonym.vue';
import InfoFaveKurtRussell from '../info/InfoFaveKurtRussell.vue';

export default {
  components: {
    InfoOccupation,
    InfoPersonality,
    InfoSkill,
    InfoNameHomonym,
    InfoFaveKurtRussell,
  },
  emits: ['name-change'],
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
