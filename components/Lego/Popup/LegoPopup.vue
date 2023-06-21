<template>
  <ClientOnly>
    <Teleport to="#popup-container">
      <div v-if="isVisible" class="popup__container">
        <div class="popup">
          <slot v-bind="closePopup"></slot>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:isVisible']);

const closePopup = () => {
  emits('update:isVisible', false);
};
</script>

<style lang="scss" scoped>
@import 'style';
</style>
