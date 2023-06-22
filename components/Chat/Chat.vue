<template>
  <section v-if="!login">Подключение...</section>
  <section v-if="login" class="chat__container">
    <div class="chat">
      <h1 class="chat__title">Simple Chat</h1>
      <h3 class="chat__login">{{ login }}</h3>
      <chat-history />
      <chat-input />
    </div>
  </section>
  <lego-popup v-model:is-visible="isPopupVisible">
    <template #default="closePopup">
      <chat-login :close-popup="closePopup" />
    </template>
  </lego-popup>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useChatStore } from '~/store/chat';

const socket = useSockets();
provide('socket', socket);

const isPopupVisible = ref(false);

const { login } = storeToRefs(useChatStore());

socket.on('connect', () => {
  isPopupVisible.value = true;
});
</script>

<style lang="scss" scoped>
@import 'style';
</style>
