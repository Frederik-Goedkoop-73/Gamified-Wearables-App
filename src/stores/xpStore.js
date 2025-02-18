import { defineStore } from 'pinia';

export const useXPStore = defineStore('xp', {
  state: () => ({
    xp: 0, // Initial XP state
    level: 1, // Initial level
    showPopup: false, // Initial visibility of the level-up popup
    leveledUpTo: 0, // Initial level the user leveled up to in one go
  }),
  actions: {
    // Add XP and update level
    addXP(xpAmount) {
      this.xp += xpAmount; // Update the XP state
      this.updateLevel(); // Call to update level when XP increases
    },

    // Calculate the total XP needed for the next level
    totalXpNeededForNextLevel() {
      return this.level * 10;
    },

    // Update the player's level based on XP
    updateLevel() {
      while (this.xp >= this.totalXpNeededForNextLevel()) {
        this.xp -= this.totalXpNeededForNextLevel(); // Subtract required XP for current level-up
        this.level++;
        this.leveledUpTo = this.level; // Track the current level-up
        this.showPopup = true; // Show level-up popup
      }
    },

    // Calculate the current progress towards the next level -> currently not used
    xpProgress() {
      return (this.xp / this.totalXpNeededForNextLevel()) * 100;
    },

    // Close the level-up popup
    closePopup() {
      this.showPopup = false;
    },

    resetXP() {
      this.xp = 0;
      this.level = 1;
      this.leveledUpTo = 0;
      this.showPopup = false;
    },
  },
});