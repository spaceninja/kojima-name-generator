<template>
  <div v-if="conditions">
    <h3>Your Name Conditions</h3>
    <blockquote>
      <p>
        Sometimes, a character will have a plot-based condition that affects
        their name. You, too, might have a condition that affects your name.
        Conditions can stack.
      </p>
    </blockquote>

    <div v-if="isKojima">
      <h4>The Kojima Condition</h4>
      <p>
        Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you.
        You are the man who created himself and there is nothing you can do
        about it. You’re in Kojima’s world—your world—and that’s just the
        breaks, pal. Stop this worksheet now. You’re Hideo Kojima. Go do the
        things that Hideo Kojima does.
      </p>
    </div>

    <div v-else>
      <div v-if="isMan">
        <h4>The -Man Condition</h4>
        <p>Your last name will include the suffix <em>-man</em>.</p>
      </div>

      <div v-if="isBig">
        <h4>The Big Condition</h4>
        <p>You’re big. Your name must have “Big” at the beginning of it.</p>
      </div>

      <div v-if="isOld">
        <h4>The Old Condition</h4>
        <p>
          You are older than you once were. Your name must have “Old” at the
          beginning of it.
        </p>
      </div>

      <div v-if="isCurrentCondition">
        <h4>The Current Condition</h4>
        <p>
          You are how you currently are. Add the condition your body is current
          in to the beginning of your name.
        </p>
        <p>(Currently hard-wired to return “Bloated”.)</p>
      </div>

      <div v-if="isClone">
        <h4>The Clone Condition</h4>
        <p>
          You are a clone of someone else, or you have been brainwashed into
          becoming a mental doppelganger of someone else. Find someone who has
          completed this worksheet and replace 50% of your Kojima name with 50%
          of their Kojima name.
        </p>
        <p>(Currently hard-wired to replace your last name with “Snake”.)</p>
      </div>
    </div>
  </div>
</template>

<script>
import getRandomInt from '../scripts/get-random-integer';

export default {
  data() {
    return {
      manRoll: getRandomInt(1, 4),
      conditionRoll: getRandomInt(1, 8),
      cloneRoll: getRandomInt(1, 12),
      kojimaRoll: getRandomInt(1, 100),
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
      if (this.isCurrentCondition) activeConditions.isCurrentCondition = true;
      if (this.isClone) activeConditions.isClone = true;
      if (this.isKojima) activeConditions.isKojima = true;

      // return the active conditions to the main app
      this.$emit('conditions', activeConditions);

      return Object.keys(activeConditions).length > 0 ? activeConditions : null;
    },
  },
};
</script>
