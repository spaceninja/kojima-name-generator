<template>
  <div>
    <h4>You have a <strong>“The” Name</strong></h4>
    <blockquote>
      <p>
        Kojima loves to make people have names that start with the word “The”
        and they usually symbolize fears or unstoppable forces. You are now that
        unstoppable force.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>The Pain (MGS3)</li>
      <li>The Sorrow (MGS3)</li>
      <li>The Viscount (MGSV)</li>
    </ul>
    <button @click="setName('Viscount')">
      Set Name
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    setName(lastName) {
      this.$emit('conditions-change', { isThe: true });
      this.$emit('name-change', { firstName: '', lastName: lastName });
    },
  },
};
</script>
