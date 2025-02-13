<script setup>
import { ref } from 'vue';
</script>

<template>
   <section class="header-container">
      <h1>Need help? Contact Us:</h1>
      <h2>Frederik Goedkoop: <a href="#">Need to fix href</a></h2>
      <h2>Prof. Jean-Marie Aerts: <a href="#">And add phone number && add other facilities</a></h2>
   </section>
</template>

<style scoped>
.header-container {
   padding: 5px 0 0 0;
   background-color: var(--bg-secondary);
   height: 15rem;
   /* normally 4rem*/
   overflow: visible;

   display: flex;
   flex-direction: column;
   align-items: center;
}

h1 {
   margin-top: 5px;
   font-size: xx-large;
   color: var(--text-secondary);
   text-align: center;
   ;
}

h2 {
   color: var(--text-primary)
}
</style>
