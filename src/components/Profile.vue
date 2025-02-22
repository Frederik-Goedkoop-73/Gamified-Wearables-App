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
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_round [#1342]</title>
                <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="var(--bg-primary)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                        id="profile_round-[#1342]"> </path>
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
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>profile_round [#1342]</title>
                <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="var(--bg-primary)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                        id="profile_round-[#1342]"> </path>
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
  background-color: var(--green-secondary);
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
