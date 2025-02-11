<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0); // XP count
const level = ref(1); // Initial level
const showPopup = ref(false); // Controls the visibility of the level-up popup
const leveledUpTo = ref(0); // Tracks the current level the user leveled up to in one go
// const avatarImage = ref('https://via.placeholder.com/100'); // Placeholder avatar image
const avatarImage = ref('https://design.duolingo.com/eacddb00bd84b759ddce.svg');

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

// Handle drag-and-drop of the new avatar image
const handleAvatarDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      avatarImage.value = e.target.result; // Update the avatar image with the dropped file
    };

    reader.readAsDataURL(file); // Convert the file to a base64 string
  }
};

const allowDragOver = (event) => {
  event.preventDefault(); // Prevent the default behavior to allow drop
};
</script>

<template>
  <main>
    <div class="body-box grey-border">
      <h1>{{ msg }}</h1>
      <!-- Mustache not necessary-->

      <!-- Avatar and User Info -->
      <div class="user-card">
        <!-- Avatar Image with Drag-and-Drop functionality -->
        <div
          class="avatar-dropzone"
          @dragover="allowDragOver"
          @drop="handleAvatarDrop"
        >
          <img :src="avatarImage" alt="User Avatar" class="avatar" />
          <p>Drag & Drop an image here to change avatar</p>
        </div>

        <div class="progress-info">
          <p>Lvl. {{ level }}</p>
          <div class="progress-bar-container">
            <!-- Progress Bar -->
            <div class="progress-bar">
              <div
                class="progress"
                :style="{ width: xpProgress() + '%' }"
              ></div>
            </div>
            <p>Lvl. {{ level + 1 }}</p>
          </div>
          <p>{{ count }} XP / {{ totalXpNeededForNextLevel() }} XP</p>
        </div>
      </div>

      <!-- XP Buttons -->
      <div class="card">
        <button type="button" @click="addXp(10)">Gain 10 XP</button>
        <button type="button" @click="addXp(100)">Gain 100 XP</button>
        <button type="button" @click="addXp(1000)">Gain 1000 XP</button>
      </div>

      <!-- Level-up Popup -->
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <h2>Congratulations!</h2>
          <p>You have leveled up to Level {{ leveledUpTo }}!</p>
          <button @click="closePopup">OK</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  /*This is just a test
  max-width: 1000px;*/
}

.user-card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  display: flex;
  justify-content: center;
}

.avatar-dropzone {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px dashed #888;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
}

.avatar-dropzone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-dropzone p {
  position: absolute;
  color: #888;
  text-align: center;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}

.avatar-dropzone:hover p {
  opacity: 1;
}

.avatar-dropzone img:not([src="https://via.placeholder.com/100"]) + p
{
  display: none;
}

.progress-info {
  flex-grow: 1;
}

.progress-bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px;
}

button {
  margin-top: 10px;
  margin-right: 5px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.popup-content h2 {
  margin-bottom: 10px;
}

.popup-content button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.popup-content button:hover {
  background-color: #45a049;
}
</style>
