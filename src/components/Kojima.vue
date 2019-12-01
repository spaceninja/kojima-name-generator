<template>
  <main>
    <NameDisplay
      :active-conditions="activeConditions"
      :first-name="firstName"
      :last-name="lastName"
    />

    <NameCategory
      v-if="!activeConditions.isKojima"
      @name-change="setName"
      @conditions-change="setConditions"
    />

    <NameConditions @conditions-change="setConditions" />
  </main>
</template>

<script>
import NameDisplay from './NameDisplay.vue';
import NameCategory from './NameCategory.vue';
import NameConditions from './NameConditions.vue';

export default {
  components: {
    NameDisplay,
    NameCategory,
    NameConditions,
  },
  data() {
    return {
      activeConditions: {},
      firstName: '',
      lastName: '',
    };
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
