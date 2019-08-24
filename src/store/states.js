import { writable } from 'svelte/store';

export const state = writable(
  [
      { id: 0, text: 'Home' }
  ]
);
