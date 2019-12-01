<template>
  <div>
    <h4>You have a <strong>Violent Name</strong></h4>
    <blockquote>
      <p>
        Sometimes, a Kojima name can be very threatening and violent, like
        Sniper Wolf, or The Fury. Now you can also be threatening and violent.
      </p>
    </blockquote>
    <h5>Examples:</h5>
    <ul>
      <li>Machinegun Kid (Metal Gear)</li>
      <li>Sniper Wolf (MGS)</li>
      <li>The Fury (MGS3)</li>
    </ul>
    <button
      @click="
        $emit('name-change', { firstName: 'Machinegun', lastName: 'Kid' })
      "
    >
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
