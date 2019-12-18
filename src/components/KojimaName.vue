<template>
  <main>
    <template v-if="isGenerated">
      <NameDisplay
        :active-conditions="activeConditions"
        :first-name="firstName"
        :last-name="lastName"
      />

      <FormGroup type="actions">
        <button class="btn btn-secondary" @click="resetName">
          That’s Not My Name!
        </button>
        <p class="form-help-text">
          It’s okay. Kojima often creates characters that have many alternate
          names. Give it another try!
        </p>
      </FormGroup>
    </template>

    <form v-else @submit.prevent="generateName">
      <NameCategory
        v-if="!activeConditions.isKojima"
        @name-change="setName"
        @conditions-change="setConditions"
      />

      <NameConditions @conditions-change="setConditions" />

      <FormGroup type="actions">
        <button class="btn btn-primary">
          Generate Your Kojima Name
        </button>
      </FormGroup>
    </form>
  </main>
</template>

<script>
import NameDisplay from './NameDisplay.vue';
import NameCategory from './NameCategory.vue';
import NameConditions from './NameConditions.vue';
import FormGroup from './forms/FormGroup.vue';

export default {
  components: {
    NameDisplay,
    NameCategory,
    NameConditions,
    FormGroup,
  },
  data() {
    return {
      activeConditions: {},
      firstName: '',
      lastName: '',
      isGenerated: false,
    };
  },
  methods: {
    setName(name) {
      this.firstName = name.firstName;
      this.lastName = name.lastName;
    },
    setConditions(conditions) {
      this.activeConditions = { ...this.activeConditions, ...conditions };
    },
    generateName() {
      this.isGenerated = true;
    },
    resetName() {
      this.activeConditions = {};
      this.firstName = '';
      this.lastName = '';
      this.isGenerated = false;
    },
  },
};
</script>
