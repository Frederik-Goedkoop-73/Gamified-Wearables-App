<script setup>
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Information from './components/Information.vue';
import Health from './components/Health.vue';
import Quests from './components/Quests.vue';
import Shop from './components/Shop.vue';
import Badges from './components/Badges.vue';
import Leaderboard from './components/Leaderboard.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

import Counter from './components/Counter.vue';

</script>

<template>
  <main>
    <Header id="Header" UserName="Example user" />
    
    <!--- Change this so you can fill it in -->
    <Profile id="Profile" UserName="Example user" />
    
    <Information id="Information" />
    <hr style="width: 70%;">
    <Counter />
    <Health id="Health" />
    <Quests id="Quests" />
    <Shop id="Shop" />
    <Badges id="Badges" />
    <Leaderboard id="Leaderboard" />
    <Footer id="Footer" />

    <Navbar />
  </main>
</template>
