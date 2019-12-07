<template>
  <div>
    <h4>You have a <strong>Name that Lacks Subtext</strong></h4>
    <blockquote>
      <p>
        Sometimes, Kojima gives up and just names a character exactly what they
        are. Congratulations. You are exactly what you do.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>The Boss (MGS3)</li>
      <li>Deadman (Death Stranding)</li>
      <li>Fatman (MGS2)</li>
    </ul>

    <InfoRecentActivity @change="setfirstName" />
  </div>
</template>

<script>
import InfoRecentActivity from '../info/InfoRecentActivity.vue';

export default {
  components: {
    InfoRecentActivity,
  },
  data() {
    return {
      firstName: '',
    };
  },
  computed: {
    /**
     * Full Name = First Name, No Last Name
     *
     * The worksheet says the first name should be "The" and the value the user
     * fills in should be the last name. However, to avoid duplicate "The" if
     * the user also has the `isThe` condition, we instead just set that
     * condition directly. As a result we have to leave one name blank, and we
     * don't want to leave first name blank, because if the `isClone` condition
     * is true, it steals the last name slot. So setting the user's input as
     * the first name gives us the most flexibility.
     */
    fullName() {
      return {
        firstName: this.firstName,
        lastName: '',
      };
    },
  },
  methods: {
    setfirstName(firstName) {
      this.firstName = firstName;
      this.setName(this.fullName);
    },
    setName(name) {
      this.$emit('conditions-change', { isMan: true });
      this.$emit('name-change', name);
    },
  },
};
</script>
