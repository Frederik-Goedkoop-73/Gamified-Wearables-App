<script setup>
// Track state to only show "sign out" button when logged in
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

// We use onMounted hook so we have access to firebase once app is created
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) { // So if user != null
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  });
};
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/sign-in"> Login </router-link>
    <router-link to="/register"> Register </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
    <router-view />
</template>

<style scoped>
nav {
  margin-left: 80px;
  display: flex;
  justify-content: space-evenly;
}

nav a {
  border: 2px solid black;
  flex-grow:1;
  flex-basis:0;
  text-align: center;
  height:2rem;
}
</style>