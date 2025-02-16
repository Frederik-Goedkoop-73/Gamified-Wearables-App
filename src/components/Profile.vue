<script setup>
import { ref } from 'vue';
import useUserProgress from '../composables/UserProgress.js'; /* .. are important here -> long debugging sesch */
/* import useXPStore from '../stores/xpStore'; */

// Destructure the UserProgress composable
const { count, level, showPopup, leveledUpTo, addXp, totalXpNeededForNextLevel, xpProgress, closePopup } = useUserProgress();


// Define props (if needed)
defineProps({
  msg: String,
});

</script>

<template>
  <section>
    <div class="grey-border">
      <h1>{{ msg }}</h1>
      <!-- Mustache not necessary-->

      <!-- Avatar and User Info -->
      <div class="user-card">
        <!-- Avatar Image with Drag-and-Drop functionality -->
        <div class="avatar-dropzone">
          <img src="https://www.svgrepo.com/show/350417/user-circle.svg" alt="User Avatar" class="avatar" />
        </div>

        <div class="progress-info">

          <div class="progress-bar-container">
            <p>Lvl. {{ level }}</p>
            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress" :style="{ width: xpProgress() + '%' }"></div>
            </div>
            <p>Lvl. {{ level + 1 }}</p>
          </div>
          <p>{{ count }} XP / {{ totalXpNeededForNextLevel() }} XP</p>
        </div>
      </div>

      <!-- XP Buttons --> <!-- Needs shared state management -->
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
  </section>
</template>

<style scoped>
/*main {This is just a test max-width: 1000px;}*/

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
  /* border: 2px solid #888; */
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

.avatar-dropzone img:not([src="https://via.placeholder.com/100"])+p {
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
  transition: width 300ms ease;
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
