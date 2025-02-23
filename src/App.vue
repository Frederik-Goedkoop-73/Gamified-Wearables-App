<script setup>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import { useAuth } from './composables/UseAuth';

const { isLoggedIn, handleSignOut } = useAuth();

</script>

<template>
  <Header UserName="User123" v-if="isLoggedIn" />
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>

  <!-- Try animating
    <router-view v-slot="{ Component }"> 
    <transition enter-active-class="animate_animated animate_fadeInLeft"
      leave-active-class="animate_animated animate_fadeOutLeft" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->

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
  cursor: pointer;
  color: var(--highlight-primary);
}

/* Transitions of pages - only fade no direction*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-out;
}
</style>