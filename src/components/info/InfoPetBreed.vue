<template>
  <FormGroup
    label="What was your first pet’s specific species/breed?"
    label-for="info-pet-breed"
  >
    <TextInput id="info-pet-breed" v-model="petBreed" @input="onInput" />
    <small class="form-help-text">
      If you never had a pet, please answer with an animal you wish you owned.
    </small>
  </FormGroup>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import TextInput from '../forms/TextInput.vue';

export default {
  components: {
    FormGroup,
    TextInput,
  },
  data() {
    return {
      petBreed: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('change', this.petBreed);
    },
  },
};
</script>
