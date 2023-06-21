import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [],
    login: null,
  }),
  actions: {
    addMessage(message) {
      this.messages = [
        ...this.messages,
        { ...message, isThisClient: message.author === this.login },
      ];
    },
    setLogin(login) {
      this.login = login;
    },
  },
});
