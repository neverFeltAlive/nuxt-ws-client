import { io } from 'socket.io-client';

export const useSockets = () => {
  // eslint-disable-next-line no-undef
  const serverUrl = `ws://${useRuntimeConfig().public.serverSocket}`;
  return io(serverUrl);
};
