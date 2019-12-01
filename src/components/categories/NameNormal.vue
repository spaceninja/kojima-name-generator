<template>
  <div>
    <h3>You have a NORMAL NAME</h3>
    <blockquote>
      <p>
        Kojima’s early work includes lots of characters that have names that are
        widely considered to be “normal.” Was this just because, in the early
        years, he didn’t have the power to say, “I’m Hideo Kojima, I can name
        someone Die-Hardman if I want to” without people questioning him?
        Probably.
      </p>
    </blockquote>
    <h4>Examples:</h4>
    <ul>
      <li>Ed Brown (Policenauts)</li>
      <li>Michael Saito (Policenauts)</li>
      <li>Ivan Rodriguez (Snatcher)</li>
    </ul>
    <button @click="$emit('name-change', 'Boring McNormalName')">
      Set Name
    </button>
  </div>
</template>

<script>
export default {};
</script>
