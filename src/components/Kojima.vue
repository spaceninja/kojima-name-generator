<template>
  <main>
    <div>Your Name Category is {{ nameCategory }}</div>

    <NameNormal v-if="hasNormalName" />
    <NameOccupational v-if="hasOccupationalName" />
    <NameHorny v-if="hasHornyName" />
    <NameThe v-if="hasTheName" />
    <NameCool v-if="hasCoolName" />
    <NameViolent v-if="hasViolentName" />
    <NameLacksSubtext v-if="hasLacksSubtextName" />
  </main>
</template>

<script>
import getRandomInt from '../scripts/get-random-integer';
import NameNormal from './NameNormal.vue';
import NameOccupational from './NameOccupational.vue';
import NameHorny from './NameHorny.vue';
import NameThe from './NameThe.vue';
import NameCool from './NameCool.vue';
import NameViolent from './NameViolent.vue';
import NameLacksSubtext from './NameLacksSubtext.vue';

export default {
  components: {
    NameNormal,
    NameOccupational,
    NameHorny,
    NameThe,
    NameCool,
    NameViolent,
    NameLacksSubtext,
  },
  data() {
    return {
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
  },
};
</script>
