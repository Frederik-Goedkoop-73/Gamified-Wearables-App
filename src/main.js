import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Firebase initialization
import './firebase'; // This will run the Firebase initialization code

import './style.css'

import App from './App.vue'

const app = createApp(App);

app.use(createPinia());
app.mount("#app")
