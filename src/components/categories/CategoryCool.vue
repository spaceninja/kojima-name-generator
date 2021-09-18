<template>
  <section class="category">
    <header class="category__header">
      <h4>You have a Cool Name</h4>
      <blockquote>
        <p>
          Kojima loves to be cool. Sometimes, his idea of cool is a bit strange,
          but it is always cool to Hideo Kojima, and that’s what matters.
        </p>
      </blockquote>
      <h5>Examples:</h5>
      <ul>
        <li>Vulcan Raven (MGS)</li>
        <li>Dr. Strangelove (MGS PW)</li>
        <li>Skull Face (MGSV)</li>
      </ul>
    </header>
    <div class="category__content">
      <!-- 3.21 - InfoMadsMikkelsen -->
      <InfoMadsMikkelsen @change="setFirstName" />

      <!--
      1. 3.17 - InfoFaveKubrick
      2. 3.18 - InfoFaveJoyDivision
      3. 3.19 - InfoNPRScience
      4. 2.06 - InfoSkill
      5. 2.08 - InfoIntangibleFear
      6. 2.13 - InfoNameHomonym
    -->
      <InfoFaveKubrick v-if="lastNameCategory === 1" @change="setLastName" />
      <InfoFaveJoyDivision
        v-if="lastNameCategory === 2"
        @change="setLastName"
      />
      <InfoNPRScience v-if="lastNameCategory === 3" @change="setLastName" />
      <InfoSkill v-if="lastNameCategory === 4" @change="setLastName" />
      <InfoIntangibleFear v-if="lastNameCategory === 5" @change="setLastName" />
      <InfoNameHomonym v-if="lastNameCategory === 6" @change="setLastName" />
    </div>
  </section>
</template>

<script>
import getRandomInt from '../../scripts/get-random-integer';
import InfoMadsMikkelsen from '../info/InfoMadsMikkelsen.vue';
import InfoFaveKubrick from '../info/InfoFaveKubrick.vue';
import InfoFaveJoyDivision from '../info/InfoFaveJoyDivision.vue';
import InfoNPRScience from '../info/InfoNPRScience.vue';
import InfoSkill from '../info/InfoSkill.vue';
import InfoIntangibleFear from '../info/InfoIntangibleFear.vue';
import InfoNameHomonym from '../info/InfoNameHomonym.vue';

export default {
  components: {
    InfoMadsMikkelsen,
    InfoFaveKubrick,
    InfoFaveJoyDivision,
    InfoNPRScience,
    InfoSkill,
    InfoIntangibleFear,
    InfoNameHomonym,
  },
  emits: ['name-change'],
  data() {
    return {
      firstName: '',
      lastName: '',
      lastNameCategory: getRandomInt(1, 6),
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
