<template>
<div>
  <Navigation :isOpen="isFormOpen" @new-event="isFormOpen=true" @close-new-event="isFormOpen=false"></Navigation>
  <transition name=fade>
    <EventForm v-if="isFormOpen" :isOpen="isFormOpen" @eventAdded="isFormOpen = false"></EventForm>
  </transition>
    <EventList v-if="!isFormOpen"/>
</div>
</template>

<script>
import EventList from './components/EventList.vue'
import EventForm from './components/EventForm.vue'
import Navigation from './components/Navigation.vue'


export default {
  data: function(){
    return{
      name: 'App',
      isFormOpen: false
    }
  },
  components: {
    EventList,
    EventForm,
    Navigation
  },
  computed:{
  },
  async created(){
    this.$store.dispatch('getEventsFromDB'),
    this.$store.dispatch('getHerosFromDB')
  }
}

</script>

<style>
.fade-enter-active{
  transition: all 0.1s linear;
}
.fade-leave-active{
  transition: all 0.1s linear;
}

.fade-enter-from {
  transform: translateY(-150px);
}

</style>