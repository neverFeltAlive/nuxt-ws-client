<template>
  <div class="chat-history">
    <chat-message
      v-for="message in store.messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script setup>
import { useChatStore } from '~/store/chat';

const store = useChatStore();

const socket = inject('socket');

socket.on('message', (message) => {
  const newMessage = JSON.parse(message);
  newMessage.date = new Date(newMessage.date).toDateString();
  console.log(newMessage);
  store.addMessage(newMessage);
});
</script>

<style lang="scss" scoped>
@import 'style';
</style>
