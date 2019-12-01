<template>
  <div>
    <h4>You have a <strong>Horny Name</strong></h4>
    <blockquote>
      <p>
        Kojima’s characters and stories are irrevocably horny. Weirdly horny,
        sure, but horny nonetheless.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Naked Snake (MGS3)</li>
      <li>Liquid Snake (MGS)</li>
      <li>Solid Snake (Metal Gear)</li>
    </ul>
    <button
      @click="$emit('name-change', { firstName: 'Naked', lastName: 'Snake' })"
    >
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
