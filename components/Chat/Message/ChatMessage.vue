<template>
  <div
    class="chat-message"
    :class="{ 'chat-message--current': message.isThisClient }"
  >
    <p class="chat-message__author">
      {{ message.isThisClient ? 'Вы' : message.author }}:
    </p>
    <p class="chat-message__content">{{ message.content }}</p>
    <p class="chat-message__date">{{ parsedDate.toDateString() }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const parsedDate = new Date(props.message.date);
</script>

<style lang="scss" scoped>
@import 'style';
</style>
