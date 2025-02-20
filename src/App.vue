<script setup>
// Track state to only show "sign out" button when logged in
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

// We use onMounted hook so we have access to firebase once app is created
let auth;
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
  <nav class="temp-nav">
    <router-link to="/"> Home </router-link>
    <router-link to="/dashboard"> Dashboard </router-link>
    <router-link to="/sign-in"> 
      <p v-if="isLoggedIn">Log out</p> 
      <p v-if="isLoggedIn == false"> Log in</p>
    </router-link>
    <div v-if="isLoggedIn == false"></div>
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