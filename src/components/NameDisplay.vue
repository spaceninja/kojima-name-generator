<template>
  <section>
    <h2>
      <span class="introduction">
        <span class="hello">Hello</span>
        my name is
      </span>
      <strong>
        {{ displayName }}
      </strong>
    </h2>
    <p class="share">
      <ShareButton service="twitter" :name="displayName" />
      <ShareButton service="facebook" :name="displayName" />
    </p>
  </section>
</template>

<script>
import ShareButton from './forms/ShareButton.vue';

export default {
  components: {
    ShareButton,
  },
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
      // if (this.activeConditions.isClone) suffix += ' (clone)';
      return suffix;
    },
    namePrefix() {
      let prefix = '';
      if (this.activeConditions.isThe) prefix += 'The ';
      if (this.activeConditions.isBig) prefix += 'Big ';
      if (this.activeConditions.isOld) prefix += 'Old ';
      if (this.activeConditions.isCurrentCondition)
        prefix += `${this.activeConditions.currentCondition} `;
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

section {
  text-align: center;
}

h2 {
  border: 1rem solid red;
  border-radius: 1rem;
  border-width: 1rem 0.25rem;
  line-height: 1;
  margin: 0.5em 0 0.5em;
}

span {
  display: block;
}

.introduction {
  background: red;
  color: white;
  font-size: 50%;
  padding-bottom: 1rem;
}

.hello {
  font-size: 200%;
  font-weight: 500;
}

strong {
  display: block;
  font-family: 'Permanent Marker', Chalkboard, ChalkboardSE-Regular,
    'Comic Sans', 'Comic Sans MS', sans-serif;
  font-weight: normal;
  line-height: 1.2;
  padding: 1em 0.5em;
  text-transform: capitalize;
}

@media (prefers-color-scheme: dark) {
  h2 {
    border-color: maroon;
  }

  .introduction {
    background: maroon;
  }
}
</style>
