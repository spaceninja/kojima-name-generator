<template>
  <div>
    <h4>You have an <strong>Occupational Name</strong></h4>
    <blockquote>
      <p>
        Kojima’s characters tend to be driven by the work that they do. That
        often carries over to their names. You, too, can be nothing more than
        your job.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Deadman (Death Stranding)</li>
      <li>Fire Trooper (Metal Gear)</li>
      <li>Sam Porter Bridges (Death Stranding)</li>
    </ul>
    <button
      @click="$emit('name-change', { firstName: 'Fire', lastName: 'Trooper' })"
    >
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
