<template>
  <main>
    <section v-if="fullName">
      <hr />
      <h2>
        Your Name is <strong>{{ displayName }}</strong>
      </h2>
    </section>

    <section v-if="!activeConditions.isKojima">
      <hr />
      <blockquote>
        <p>
          Kojima names fall into a finite number of categories. This section
          will determine the category in which your name belongs.
        </p>
      </blockquote>

      <NameNormal v-if="hasNormalName" @name-change="setName" />
      <NameOccupational v-if="hasOccupationalName" @name-change="setName" />
      <NameHorny v-if="hasHornyName" @name-change="setName" />
      <NameThe
        v-if="hasTheName"
        @name-change="setName"
        @conditions-change="setConditions"
      />
      <NameCool v-if="hasCoolName" @name-change="setName" />
      <NameViolent v-if="hasViolentName" @name-change="setName" />
      <NameLacksSubtext v-if="hasLacksSubtextName" @name-change="setName" />
    </section>

    <NameConditions @conditions-change="setConditions" />
  </main>
</template>

<script>
import getRandomInt from '../scripts/get-random-integer';
import NameNormal from './categories/NameNormal.vue';
import NameOccupational from './categories/NameOccupational.vue';
import NameHorny from './categories/NameHorny.vue';
import NameThe from './categories/NameThe.vue';
import NameCool from './categories/NameCool.vue';
import NameViolent from './categories/NameViolent.vue';
import NameLacksSubtext from './categories/NameLacksSubtext.vue';
import NameConditions from './NameConditions.vue';

export default {
  components: {
    NameNormal,
    NameOccupational,
    NameHorny,
    NameThe,
    NameCool,
    NameViolent,
    NameLacksSubtext,
    NameConditions,
  },
  data() {
    return {
      activeConditions: {},
      firstName: '',
      lastName: '',
      nameCategory: getRandomInt(1, 20),
    };
  },
  computed: {
    hasNormalName() {
      return this.nameCategory === 1 ? true : false;
    },
    hasOccupationalName() {
      return this.nameCategory >= 2 && this.nameCategory <= 6 ? true : false;
    },
    hasHornyName() {
      return this.nameCategory >= 7 && this.nameCategory <= 10 ? true : false;
    },
    hasTheName() {
      return this.nameCategory >= 11 && this.nameCategory <= 13 ? true : false;
    },
    hasCoolName() {
      return this.nameCategory >= 14 && this.nameCategory <= 17 ? true : false;
    },
    hasViolentName() {
      return this.nameCategory >= 18 && this.nameCategory <= 19 ? true : false;
    },
    hasLacksSubtextName() {
      return this.nameCategory === 20 ? true : false;
    },
    fullName() {
      // special case for Hideo Kojima
      if (this.activeConditions.isKojima) {
        return 'Hideo Kojima';
      }

      // set to null if both are missing so we can hide the results block
      if (!this.firstName && !this.lastName) {
        return null;
      }

      // force clones to have the last name "Snake"
      if (this.activeConditions.isClone) {
        return `${this.firstName} Snake`;
      }

      // okay, we have a name!
      return `${this.firstName} ${this.lastName}`;
    },
    nameSuffix() {
      let suffix = '';
      if (this.activeConditions.isMan) suffix += '-man';
      if (this.activeConditions.isClone) suffix += ' (clone)';
      return suffix;
    },
    namePrefix() {
      let prefix = '';
      if (this.activeConditions.isThe) prefix += 'The ';
      if (this.activeConditions.isBig) prefix += 'Big ';
      if (this.activeConditions.isOld) prefix += 'Old ';
      if (this.activeConditions.isCurrentCondition) prefix += 'Bloated ';
      return prefix;
    },
    displayName() {
      if (this.activeConditions.isKojima) return this.fullName;

      let name = `${this.namePrefix}${this.fullName}${this.nameSuffix}`;

      return name;
    },
  },
  methods: {
    setName(name) {
      this.firstName = name.firstName;
      this.lastName = name.lastName;
    },
    setConditions(conditions) {
      this.activeConditions = { ...conditions, ...this.activeConditions };
    },
  },
};
</script>
