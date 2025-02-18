<script setup>
import { useXPStore } from '../stores/xpStore';

// Initialise the Pinia store
const xpStore = useXPStore();

// Define props (if needed)
defineProps({
  UserName: String,
});

</script>

<template>
  <section>
    <div class="grey-border">
      <ul class="logo-header" @click="toggleContentVisisbility">
        <li class="logo">
          <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f1ede7">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_image_round [#1326]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2199.000000)" fill="var(--bg-primary)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                        id="profile_image_round-[#1326]"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
        </li>
        <li class="logo-header-header">
          <h1>{{ UserName }}</h1>
        </li>
        <li class="logo">
          <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#f1ede7">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_image_round [#1326]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2199.000000)" fill="var(--bg-primary)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M342,2055.615 C342,2055.722 341.97,2055.821 341.939,2055.918 C341.723,2052.974 339.918,2050.482 337.375,2049.283 C338.368,2048.369 339,2047.071 339,2045.615 C339,2043.534 337.728,2041.753 335.92,2041 L341,2041 C341.552,2041 342,2041.063 342,2041.615 L342,2055.615 Z M339.963,2057 L327.975,2057 C327.974,2057 327.969,2056.741 327.969,2056.701 C327.969,2053.605 330.326,2050.96 333.339,2050.645 C334,2050.733 334.255,2050.622 334.623,2050.576 C337.625,2050.902 339.969,2053.623 339.969,2056.71 C339.969,2056.75 339.964,2057 339.963,2057 L339.963,2057 Z M326,2055.615 L326,2041.615 C326,2041.063 326.448,2041 327,2041 L332.08,2041 C330.272,2041.753 329,2043.534 329,2045.615 C329,2047.06 329.622,2048.351 330.602,2049.264 C328.107,2050.422 326.307,2052.82 326.012,2055.675 C326.011,2055.654 326,2055.636 326,2055.615 L326,2055.615 Z M337,2045.615 C337,2047.055 335.979,2048.26 334.623,2048.548 C334.033,2048.5 333.868,2048.508 333.368,2048.545 C332.017,2048.254 331,2047.052 331,2045.615 C331,2043.961 332.346,2042.615 334,2042.615 C335.654,2042.615 337,2043.961 337,2045.615 L337,2045.615 Z M342,2039 L326,2039 C324.895,2039 324,2039.895 324,2041 L324,2057 C324,2058.104 324.895,2059 326,2059 L342,2059 C343.105,2059 344,2058.104 344,2057 L344,2041 C344,2039.895 343.105,2039 342,2039 L342,2039 Z"
                        id="profile_image_round-[#1326]"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
        </li>
      </ul>

      <hr>

      <!-- Avatar and User Info -->
      <div class="user-card">
        <!-- Avatar Image with Drag-and-Drop functionality -->
        <div class="avatar-dropzone">
          <img src="https://www.svgrepo.com/show/350417/user-circle.svg" alt="User Avatar" class="avatar" />
        </div>

        <div class="progress-info">
          <div class="empty-flex"></div>
          <div class="progress-bar-container">
            <p>Lvl. {{ xpStore.level }}</p>
            <!-- Progress Bar -->
            <div class="progress-bar">
              <div class="progress" :style="{ width: xpStore.xpProgress() + '%' }"></div>
            </div>
            <p>Lvl. {{ xpStore.level + 1 }}</p>
          </div>
          <p id="progress-fraction">{{ xpStore.xp }} XP / {{ xpStore.totalXpNeededForNextLevel() }} XP</p>
        </div>
      </div>

      <!-- XP Buttons --> <!-- Needs shared state management -->
      <!-- <div class="card">
        <button type="button" @click="xpStore.addXP(10)">Gain 10 XP</button>
        <button type="button" @click="xpStore.addXP(100)">Gain 100 XP</button>
        <button type="button" @click="xpStore.addXP(1000)">Gain 1000 XP</button>
      </div> -->

      <!-- Level-up Popup -->
      <div v-if="xpStore.showPopup" class="popup">
        <div class="popup-content">
          <h2>Congratulations!</h2>
          <p>You have leveled up to Level {{ xpStore.leveledUpTo }}!</p>
          <button @click="xpStore.closePopup">OK</button>
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
  margin: 20px;
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
  display: flex;
  flex-direction: column;
  height: 120px;
}

.empty-flex {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

.progress-bar-container {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
}

.progress-bar-container p {
  min-width: 4rem;
  text-align: center;
  margin: 0;
}

#progress-fraction {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  margin: 0;
  align-content: center;
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
