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

</script>

<template>
  <main>
    <Header id="Header" UserName="Example user" />
    
    <!--- Change this so you can fill it in -->
    <Profile id="Profile" msg="Example user" />
    
    <hr style="width: 70%;">
    <Information id="Information" />
    <hr style="width: 70%;">
    <Health id="Health" />
    <hr style="width: 70%;">
    <Quests id="Quests" />
    <hr style="width: 70%;">
    <Shop id="Shop" />
    <hr style="width: 70%;">
    <Badges id="Badges" />
    <hr style="width: 70%;">
    <Leaderboard id="Leaderboard" />
    
    <Footer id="Footer" />

    <Navbar />
  </main>
</template>
