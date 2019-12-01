<template>
  <main>
    <h2 v-if="name">
      Your Name is <strong>{{ name }}</strong>
    </h2>

    <NameNormal v-if="hasNormalName && !name" @name-change="setName" />
    <NameOccupational
      v-if="hasOccupationalName && !name"
      @name-change="setName"
    />
    <NameHorny v-if="hasHornyName && !name" @name-change="setName" />
    <NameThe v-if="hasTheName && !name" @name-change="setName" />
    <NameCool v-if="hasCoolName && !name" @name-change="setName" />
    <NameViolent v-if="hasViolentName && !name" @name-change="setName" />
    <NameLacksSubtext
      v-if="hasLacksSubtextName && !name"
      @name-change="setName"
    />
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
      name: '',
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
  methods: {
    setName(name) {
      this.name = name;
    },
  },
};
</script>
