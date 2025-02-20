<script setup>
import { useAuth } from './composables/UseAuth';

const { isLoggedIn, handleSignOut } = useAuth();
</script>

<template>
  <nav class="temp-nav">
    <router-link to="/"> Home </router-link>
    <router-link to="/dashboard"> Dashboard </router-link>
    <router-link to="/sign-in"> 
      <p v-if="isLoggedIn">Log out</p> 
      <p v-if="!isLoggedIn"> Log in</p>
    </router-link>
    <div v-if="!isLoggedIn"></div>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
    <router-view />
</template>

<style scoped>
.temp-nav {
  margin-left: 80px;
  display: flex;
  justify-content: space-evenly;
}

nav a, button, div {
  border: 2px solid black;
  flex-grow:1;
  flex-shrink: 1;
  flex-basis:0;
  text-align: center;
  height:2rem;
}
</style>