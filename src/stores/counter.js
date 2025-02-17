// temporary file for Pinia reworking references
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    console.log('Counter store initialized'); // Add logging
    return { count: 0 };
  },
  actions: {
    increment(val = 1) {
      console.log('Incrementing count by', val); // Add logging
      this.count += val;
    },
    async waitAndAdd() {
      console.log('Waiting and adding to count'); // Add logging
      setTimeout(() => {
        this.count++;
      }, 2000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
