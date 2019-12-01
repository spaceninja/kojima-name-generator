<template>
  <div>
    <h3>You have a HORNY NAME</h3>
    <blockquote>
      <p>
        Kojima’s characters and stories are irrevocably horny. Weirdly horny,
        sure, but horny nonetheless.
      </p>
    </blockquote>
    <h4>Examples:</h4>
    <ul>
      <li>Naked Snake (MGS3)</li>
      <li>Liquid Snake (MGS)</li>
      <li>Solid Snake (Metal Gear)</li>
    </ul>
    <button @click="$emit('name-change', 'Naked Snake')">
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
