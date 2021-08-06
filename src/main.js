import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js';
import EventList from './components/EventList.vue'
import EventForm from './components/EventForm.vue'
import Navigation from './components/Navigation.vue'

const countDownerApp = createApp(App)
countDownerApp.component('EventList', EventList)
countDownerApp.component('EventForm', EventForm)
countDownerApp.component('Navigation', Navigation)
countDownerApp.use(store)
countDownerApp.mount('#app')