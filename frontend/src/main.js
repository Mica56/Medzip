import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router from './router'
// import Vue from 'vue'

createApp(App).use(router).mount('#app')

// export const EventBus = new Vue();