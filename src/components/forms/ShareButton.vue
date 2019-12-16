<template>
  <a
    :id="service"
    :href="shareUrl"
    target="_blank"
    :class="`btn btn-${service}`"
  >
    <i class="icon"></i>
    <span class="label">Post to {{ service }}</span>
  </a>
</template>

<script>
const appUrl = encodeURIComponent('https://kojima.oscorp.net/');

export default {
  props: {
    service: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    message() {
      return encodeURIComponent(`Hello, my Kojima name is "${this.name}"`);
    },
    shareUrl() {
      if (this.service === 'twitter') {
        return `https://twitter.com/intent/tweet?text=${this.message}&url=${appUrl}`;
      }
      if (this.service === 'facebook') {
        return `https://www.facebook.com/sharer/sharer.php?quote=${this.message}&u=${appUrl}&display=popup`;
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  text-transform: capitalize;
}
</style>
