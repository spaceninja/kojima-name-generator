<template>
  <FormGroup
    label="What was your first pet’s specific species/breed?"
    label-for="info-pet-breed"
  >
    <AppInput
      id="info-pet-breed"
      v-model="petBreed"
      @update:modelValue="onInput"
    />
    <small class="form-help-text">
      If you never had a pet, please answer with an animal you wish you owned.
    </small>
  </FormGroup>
</template>

<script>
import FormGroup from '../forms/FormGroup.vue';
import AppInput from '../forms/AppInput.vue';

export default {
  components: {
    FormGroup,
    AppInput,
  },
  emits: ['change'],
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
