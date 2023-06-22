<template>
  <input
    class="lego-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import 'style';
</style>
