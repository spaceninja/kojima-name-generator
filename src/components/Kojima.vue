<template>
  <main>
    <section v-if="name">
      <h2>
        Your Name is <strong>{{ fullName }}</strong>
      </h2>
      <hr />
    </section>

    <NameNormal v-if="hasNormalName && !isKojima" @name-change="setName" />
    <NameOccupational
      v-if="hasOccupationalName && !isKojima"
      @name-change="setName"
    />
    <NameHorny v-if="hasHornyName && !isKojima" @name-change="setName" />
    <NameThe v-if="hasTheName && !isKojima" @name-change="setName" />
    <NameCool v-if="hasCoolName && !isKojima" @name-change="setName" />
    <NameViolent v-if="hasViolentName && !isKojima" @name-change="setName" />
    <NameLacksSubtext
      v-if="hasLacksSubtextName && !isKojima"
      @name-change="setName"
    />

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
      activeConditions: null,
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
    isClone() {
      return this.activeConditions && this.activeConditions.isClone
        ? true
        : false;
    },
    isKojima() {
      return this.activeConditions && this.activeConditions.isKojima
        ? true
        : false;
    },
    nameSuffix() {
      return this.activeConditions && this.activeConditions.isMan ? '-man' : '';
    },
    namePrefix() {
      if (this.activeConditions) {
        if (this.activeConditions.isBig) return 'Big ';
        if (this.activeConditions.isOld) return 'Old ';
        if (this.activeConditions.isCurrentCondition) return 'Bloated ';
      }
      return '';
    },
    fullName() {
      if (this.isKojima) return this.name;

      let name = `${this.namePrefix}${this.name}${this.nameSuffix}`;

      if (this.isClone) name += ' Snake (Clone)';

      return name;
    },
  },
  methods: {
    setName(name) {
      this.name = name;
    },
    setConditions(conditions) {
      this.activeConditions = conditions;
      if (this.activeConditions.isKojima) this.setName('Hideo Kojima');
    },
  },
};
</script>
