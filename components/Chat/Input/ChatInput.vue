<template>
  <div>
    <lego-input v-model="inputValue" />
    <lego-button :disabled="inputValue === ''" @click="handleSendClick">
      Отправить
    </lego-button>
  </div>
</template>

<script setup>
const inputValue = ref('');
const socket = inject('socket');

const handleSendClick = () => {
  if (inputValue.value === '') return;

  socket.emit('message', JSON.stringify({ message: inputValue.value }));
  inputValue.value = '';
};
</script>
