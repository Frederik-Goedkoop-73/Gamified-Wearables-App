import { defineStore } from 'pinia';

export const useCoinStore = defineStore('coins', {
    state: () => ({
        coins: 0,
    }),
    actions: {
        // Add coins (button function)
        addCoins(coinAmount) {
            this.coins += coinAmount; // Update the coin state
        },

        resetCoins() {
            this.coins = 0;
        },
    }
});