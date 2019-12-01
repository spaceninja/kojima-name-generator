<template>
  <div>
    <h3>You have a NAME THAT LACKS SUBTEXT</h3>
    <blockquote>
      <p>
        Sometimes, Kojima gives up and just names a character exactly what they
        are. Congratulations. You are exactly what you do.
      </p>
    </blockquote>
    <h4>Examples:</h4>
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
