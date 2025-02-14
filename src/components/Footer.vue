<script setup>
import { ref } from 'vue';
</script>

<template>
   <section class="header-container">
      <h1>Need help? Contact Us:</h1>
      <hr>
      <h2>Frederik Goedkoop</h2>
      <ul class="disc-list">
         <li><strong>Email:</strong> <a
               href="mailto:Frederik.Goedkoop@student.uantwerpen.be">Frederik.Goedkoop@student.uantwerpen.be</a>
            or <a href="mailto:frederik.goedkoop@student.kuleuven.be">frederik.goedkoop@student.kuleuven.be</a>
         </li>
         <li><strong>Phone:</strong> <a href="tel:+32474547625">+32 4 74 54 76 25</a></li>
      </ul>
      <h2>Prof. Jean-Marie Aerts</h2>
      <ul class="disc-list">
         <li><strong>Email:</strong> <a href="mailto:jean-marie.aerts@kuleuven.be">jean-marie.aerts@kuleuven.be</a>
         </li>
         <li><strong>Phone:</strong> <a href="tel:+3216321434">+32 16 32 14 34</a></li>
      </ul>
   </section>
</template>

<style scoped>
.header-container {
   padding: 5px 0 0 0;
   background-color: var(--bg-secondary);
   overflow: visible;

   display: flex;
   flex-direction: column;
   align-items: center;
}

h1 {
   margin-top: 5px;
   margin-bottom: 0;
   font-size: xx-large;
   color: var(--text-secondary);
   text-align: center;
}

hr {
   border-top: 3px solid var(--text-secondary);
   width: 90%;
}

h2 {
   color: var(--text-secondary);
   margin-bottom: 0;
}

.disc-list {
   color: var(--text-primary)
}

/* Small screens */
@media only screen and (max-width: 600px) {
   .header-container {
      padding-bottom: 5rem;
      /* Fixes empty left margin on screen */
   }

}
</style>
