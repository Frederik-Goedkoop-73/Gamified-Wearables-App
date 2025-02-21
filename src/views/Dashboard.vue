<script setup>
import Profile from '../components/Profile.vue';
import Information from '../components/Information.vue';
import Health from '../components/Health.vue';
import Quests from '../components/Quests.vue';
import Shop from '../components/Shop.vue';
import Badges from '../components/Badges.vue';
import Leaderboard from '../components/Leaderboard.vue';
import Footer from '../components/Footer.vue';

import DevTools from '../components/DevTools.vue';

</script>

<template>
  <main>
    <!-- Temporary to change variables -->
    <DevTools />

    <!--- Change this so you can fill it in -->
    <Profile id="Profile" UserName="Example user" />
    
    <Information id="Information" />
    <hr style="width: 70%;">
    <Health id="Health" />
    <Quests id="Quests" />
    <Shop id="Shop" />
    <Badges id="Badges" />
    <Leaderboard id="Leaderboard" />
    <Footer id="Footer" />
  </main>
</template>
