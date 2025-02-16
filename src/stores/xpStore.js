import { defineStore } from 'pinia';

export const useXPStore = defineStore('xp', {
  state: () => ({
    xp: 0, // Initial XP state
  }),
  actions: {
    addXP(amount) {
      this.xp += amount; // Update the XP state
    },
  },
});