<template>
  <section v-if="conditions" class="name-form">
    <header v-if="!isKojima" class="name-form__header">
      <h3>Your Name Conditions:</h3>
      <blockquote>
        <p>
          Sometimes, a character will have a plot-based condition that affects
          their name. Conditions can stack.
        </p>
      </blockquote>
    </header>

    <div v-if="isKojima" class="name-form__content">
      <h4>You have the Kojima Condition</h4>
      <p>
        Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you.
        You are the man who created himself and there is nothing you can do
        about it. You’re in Kojima’s world—your world—and that’s just the
        breaks, pal. You’re Hideo Kojima now. Go do the things that Hideo Kojima
        does.
      </p>
    </div>

    <div v-else class="name-form__content">
      <div v-if="isMan">
        <h4>You have the “Man” Condition</h4>
        <p>Your last name will include the suffix <em>-man</em>.</p>
      </div>

      <div v-if="isBig">
        <h4>You have the “Big” Condition</h4>
        <p>You’re big. Your name must have “Big” at the beginning of it.</p>
      </div>

      <div v-if="isOld">
        <h4>You have the “Old” Condition</h4>
        <p>
          You are older than you once were. Your name must have “Old” at the
          beginning of it.
        </p>
      </div>

      <section v-if="isCurrentCondition" class="category">
        <header class="category__header">
          <h4>You have the “Your Current Condition” Condition</h4>
          <p>
            You are how you currently are. Add the condition your body is
            currently in to the beginning of your name.
          </p>
        </header>
        <div class="category__content">
          <InfoBodyCondition @change="setCondition" />
        </div>
      </section>

      <div v-if="isClone">
        <h4>You have the Clone Condition</h4>
        <p>
          You are a clone of someone else, or you have been brainwashed into
          becoming a mental doppelganger of someone else.
          <!-- Find someone who has completed this worksheet and replace 50% of
          your Kojima name with 50% of their Kojima name. -->
        </p>
        <p>
          <small>
            (Currently hard-wired to replace your last name with “Snake”.)
          </small>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import getRandomInt from '../scripts/get-random-integer';
import InfoBodyCondition from './info/InfoBodyCondition.vue';

export default {
  components: {
    InfoBodyCondition,
  },
  data() {
    return {
      manRoll: getRandomInt(1, 4),
      conditionRoll: getRandomInt(1, 8),
      cloneRoll: getRandomInt(1, 12),
      kojimaRoll: getRandomInt(1, 100),
      currentCondition: '',
    };
  },
  computed: {
    isMan() {
      return this.manRoll === 4 ? true : false;
    },
    isBig() {
      return this.conditionRoll === 6 ? true : false;
    },
    isOld() {
      return this.conditionRoll === 7 ? true : false;
    },
    isCurrentCondition() {
      return this.conditionRoll === 8 ? true : false;
    },
    isClone() {
      return this.cloneRoll === 12 ? true : false;
    },
    isKojima() {
      return this.kojimaRoll === 69 ? true : false;
    },
    conditions() {
      let activeConditions = {};

      if (this.isMan) activeConditions.isMan = true;
      if (this.isBig) activeConditions.isBig = true;
      if (this.isOld) activeConditions.isOld = true;
      if (this.isClone) activeConditions.isClone = true;
      if (this.isKojima) activeConditions.isKojima = true;
      if (this.isCurrentCondition) {
        activeConditions.currentCondition = this.currentCondition;
        activeConditions.isCurrentCondition = true;
      }

      // return the active conditions to the main app
      this.$emit('conditions-change', activeConditions);

      // set to null if no conditions are active, so we can hide the descriptions
      return Object.keys(activeConditions).length > 0 ? activeConditions : null;
    },
  },
  methods: {
    setCondition(condition) {
      this.currentCondition = condition;
    },
  },
};
</script>
