import { createApp } from 'vue'

// Import pinia for saving states globally 
import { createPinia } from 'pinia'

// Import Firebase initialization -> saving states persistently (so even after refresh)
import './firebase'; // This will run the Firebase initialization code

// Import global styles
import './style.css'
import 'animate.css' // Router animation

// Import router to change url whithout refreshing -> necessary for o-auth
import router from './router/router';

import App from './App.vue'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
