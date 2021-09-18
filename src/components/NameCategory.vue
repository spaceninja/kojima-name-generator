<template>
  <section class="name-form">
    <header class="name-form__header">
      <h3>Your Name Category:</h3>
      <blockquote>
        <p>
          Kojima names fall into a finite number of categories. This section
          will determine the category in which your name belongs.
        </p>
        <p class="form-help-text">
          (Reload the page for a different category.)
        </p>
      </blockquote>
    </header>
    <div class="name-form__content">
      <CategoryNormal v-if="hasNormalName" @name-change="setName" />
      <CategoryOccupational v-if="hasOccupationalName" @name-change="setName" />
      <CategoryHorny v-if="hasHornyName" @name-change="setName" />
      <CategoryThe
        v-if="hasTheName"
        @name-change="setName"
        @conditions-change="setConditions"
      />
      <CategoryCool v-if="hasCoolName" @name-change="setName" />
      <CategoryViolent v-if="hasViolentName" @name-change="setName" />
      <CategoryLacksSubtext
        v-if="hasLacksSubtextName"
        @name-change="setName"
        @conditions-change="setConditions"
      />
    </div>
  </section>
</template>

<script>
import getRandomInt from '../scripts/get-random-integer';
import CategoryNormal from './categories/CategoryNormal.vue';
import CategoryOccupational from './categories/CategoryOccupational.vue';
import CategoryHorny from './categories/CategoryHorny.vue';
import CategoryThe from './categories/CategoryThe.vue';
import CategoryCool from './categories/CategoryCool.vue';
import CategoryViolent from './categories/CategoryViolent.vue';
import CategoryLacksSubtext from './categories/CategoryLacksSubtext.vue';

export default {
  components: {
    CategoryNormal,
    CategoryOccupational,
    CategoryHorny,
    CategoryThe,
    CategoryCool,
    CategoryViolent,
    CategoryLacksSubtext,
  },
  emits: ['name-change', 'conditions-change'],
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
