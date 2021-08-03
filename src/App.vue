<template>
<div>
  <Navigation :isOpen="isFormOpen" @new-event="isFormOpen=true" @close-new-event="isFormOpen=false"></Navigation>
  <EventForm v-if="isFormOpen"></EventForm>
  <EventList />
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
  }
}

</script>

<style>
</style>
