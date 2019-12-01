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
      <li>Para-Medic (MGS3)</li>
      <li>Fatman (MGS2)</li>
    </ul>
    <button
      @click="$emit('name-change', { firstName: 'Para', lastName: 'Medic' })"
    >
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
