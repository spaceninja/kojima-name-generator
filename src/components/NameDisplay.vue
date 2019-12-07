<template>
  <section v-if="fullName">
    <hr />
    <h2>
      Your Name is <strong>{{ displayName }}</strong>
    </h2>
  </section>
</template>

<script>
export default {
  props: {
    activeConditions: {
      type: Object,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName() {
      // special case for Hideo Kojima
      if (this.activeConditions.isKojima) return 'Hideo Kojima';

      // set to null if both are missing so we can hide the results block
      if (!this.firstName && !this.lastName) return null;

      // force clones to have the last name "Snake"
      if (this.activeConditions.isClone) return `${this.firstName} Snake`;

      // if no first name, return just the last (to avoid spaces)
      if (!this.firstName) return this.lastName;

      // if no last name, return just the first (to avoid spaces)
      if (!this.lastName) return this.firstName;

      // okay, we have a name!
      return `${this.firstName} ${this.lastName}`;
    },
    nameSuffix() {
      let suffix = '';
      if (this.activeConditions.isMan) suffix += 'man';
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
};
</script>
