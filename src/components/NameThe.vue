<template>
  <div>
    <h3>You have a “THE” NAME</h3>
    <blockquote>
      <p>
        Kojima loves to make people have names that start with the word “The”
        and they usually symbolize fears or unstoppable forces. You are now that
        unstoppable force.
      </p>
    </blockquote>
    <h4>Examples:</h4>
    <ul>
      <li>The Pain (MGS3)</li>
      <li>The Sorrow (MGS3)</li>
      <li>The Viscount (MGSV)</li>
    </ul>
    <button @click="$emit('name-change', 'The Viscount')">
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
