<script setup>
import UserCard from './components/UserCard.vue';
import Information from './components/Information.vue';
import Body from './components/Body.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <UserCard msg="Example user" />
  <!--- Change this so you can fill it in -->
  <hr style="width: 70%;">
  <Information />
  <hr style="width: 70%;">
  <Body />
  <Navbar />
</template>
