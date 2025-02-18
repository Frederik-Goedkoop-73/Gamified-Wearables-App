// Currently not in use --> everything transported to xpStore.js

import { ref } from 'vue';

export default function useUserProgress() {
    const count = ref(0); // XP count
    const level = ref(1); // Initial level
    const showPopup = ref(false); // Controls the visibility of the level-up popup
    const leveledUpTo = ref(0); // Tracks the current level the user leveled up to in one go
    //const avatarImage = ref('https://design.duolingo.com/eacddb00bd84b759ddce.svg');

    // Method to add XP based on button clicks
    const addXp = (xpAmount) => {
        count.value += xpAmount;
        updateLevel(); // Call to update level when XP increases
    };

    // Method to calculate the total XP needed for the next level
    const totalXpNeededForNextLevel = () => level.value * 10;

    // Method to update the player's level based on XP
    const updateLevel = () => {
        while (count.value >= totalXpNeededForNextLevel()) {
            count.value -= totalXpNeededForNextLevel(); // Subtract required XP for current level-up
            level.value++; // Increment level
            leveledUpTo.value = level.value; // Track the current level-up
            showPopup.value = true; // Show level-up popup
        }
    };

    // Method to calculate the current progress towards the next level
    const xpProgress = () => {
        return (count.value / totalXpNeededForNextLevel()) * 100; // Calculate progress percentage
    };

    // Method to close the level-up popup
    const closePopup = () => {
        showPopup.value = false;
    };


    // Return all the state and functions that other components will need    
    return {
        count,
        level,
        showPopup,
        leveledUpTo,
        addXp,
        totalXpNeededForNextLevel,
        updateLevel,
        xpProgress,
        closePopup,
    };
}
