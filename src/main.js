import { createApp, h } from 'vue'
import App from './App.vue'
import store from './store.js';
import EventList from './components/EventList.vue'
import EventForm from './components/EventForm.vue'
import Navigation from './components/Navigation.vue'

const countDownerApp = createApp({render: ()=>h(App)})
countDownerApp.component('EventList', EventList)
countDownerApp.component('EventForm', EventForm)
countDownerApp.component('Navigation', Navigation)
countDownerApp.use(store)
countDownerApp.mount('#app')