import { defineStore } from 'pinia';

export const useStreakStore = defineStore('streak', {
    state: () => ({
        streak: 0,
    }),
    actions: {
        // Add streaks (button function)
        addStreak(streakAmount) {
            this.streak += streakAmount; // Update the streak state
        },

        resetStreak() {
            this.streak = 0;
        },
    }
});