<template>
  <div>
    <h4>You have a <strong>Normal Name</strong></h4>
    <blockquote>
      <p>
        Kojima’s early work includes lots of characters that have names that are
        widely considered to be “normal.” Was this just because, in the early
        years, he didn’t have the power to say, “I’m Hideo Kojima, I can name
        someone Die-Hardman if I want to” without people questioning him?
        Probably.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Ed Brown (Policenauts)</li>
      <li>Michael Saito (Policenauts)</li>
      <li>Ivan Rodriguez (Snatcher)</li>
    </ul>

    <InfoFullName @change="setName" />
  </div>
</template>

<script>
import InfoFullName from '../info/InfoFullName.vue';

export default {
  components: {
    InfoFullName,
  },
  methods: {
    setName(name) {
      this.$emit('name-change', name);
    },
  },
};
</script>
