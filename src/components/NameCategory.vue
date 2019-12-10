<template>
  <section>
    <header>
      <h3>Your Name Category:</h3>
      <blockquote>
        <p>
          Kojima names fall into a finite number of categories. This section
          will determine the category in which your name belongs. (Reload the
          page for a different category.)
        </p>
      </blockquote>
    </header>

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
    <NameLacksSubtext
      v-if="hasLacksSubtextName"
      @name-change="setName"
      @conditions-change="setConditions"
    />
  </section>
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
  methods: {
    setName(name) {
      this.$emit('name-change', name);
    },
    setConditions(conditions) {
      this.$emit('conditions-change', conditions);
    },
  },
};
</script>
