<template>
  <div>
    <h4>You have a <strong>Cool Name</strong></h4>
    <blockquote>
      <p>
        Kojima loves to be cool. Sometimes, his idea of cool is a bit strange,
        but it is always cool to Hideo Kojima, and that’s what matters.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Vulcan Raven (MGS)</li>
      <li>Skull Face (MGSV)</li>
      <li>Dr. Strangelove (MGSV)</li>
    </ul>
    <button
      @click="$emit('name-change', { firstName: 'Skull', lastName: 'Face' })"
    >
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
