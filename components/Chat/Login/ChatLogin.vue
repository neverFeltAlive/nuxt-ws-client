<template>
  <lego-input v-model="inputValue" placeholder="Логин..." />
  <lego-button :disabled="inputValue === ''" @click="handleLoginClick">
    Войти
  </lego-button>
</template>

<script setup>
import { useChatStore } from '~/store/chat';

const props = defineProps({
  closePopup: {
    type: Function,
    default: () => {},
  },
});

const inputValue = ref('');
const socket = inject('socket');
const store = useChatStore();

const handleLoginClick = () => {
  if (inputValue.value === '') return;

  socket.emit('login', inputValue.value);
};

socket.on('login', (data) => {
  if (data.success) {
    console.log(data);
    store.setLogin(data.login);
    props.closePopup();
  } else inputValue.value = '';
});
</script>
