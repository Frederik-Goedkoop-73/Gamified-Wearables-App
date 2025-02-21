<script setup>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import { useAuth } from './composables/UseAuth';

const { isLoggedIn, handleSignOut } = useAuth();

</script>

<template>
  <Header UserName="User123" v-if="isLoggedIn" />
  <router-view />
  <Navbar v-if="isLoggedIn" />
</template>

<style scoped>
.temp-nav {
  margin-left: 80px;
  display: flex;
  justify-content: space-evenly;
}

nav a,
button,
div {
  border-bottom: 2px solid black;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
}

nav div {
  cursor:pointer;
  color: var(--highlight-primary);
}
</style>