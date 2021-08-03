<template>
<!-- Events Section -->
    <div class="container">
        <h1 v-text="pageHeader"></h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div v-for="(event, index) in events" :key="event.id" class="col">
                <EventItem 
                    :index="index" 
                    :event="event" 
                    :selectionIndex="selectionIndex"
                    :hover="hover"
                    @show-date="updateSelectionIndex(index)"
                    @mouse-enter="updateHoverStatus(index)"
                    @mouse-leave="updateHoverStatus(-1)"
                    @remove="removeEvent(event)"
                >
                </EventItem>
            </div>
            <div v-if="events.length == 0">
                <p class="highlight">No events here. Start adding some!</p>
            </div>
        </div>
    </div>
</template>

<script>
import eventData from '../assets/data.js';
import EventItem from '../components/EventItem.vue';

export default {
    data: function(){
        return{
            name: 'EventList',
            pageHeader: "Upcoming events",
            events: eventData,
            selectionIndex: -1,
            hover: -1
        }
    },
    components:{
        EventItem
    },
    methods:{
        updateSelectionIndex(index){
            if(this.selectionIndex == -1 || this.selectionIndex != index){
                this.selectionIndex = index
            } else{
                this.selectionIndex = -1
            }
        },
        updateHoverStatus(index){
            if(this.hover == index){
                this.hover = -1
            } else{
                this.hover = index
            }
        },
        removeEvent(item){
            this.events = this.events.filter(event => event !== item)
        }
    }

};

</script>

<style>
.highlight{
    font-size: 1.5rem;
}
</style>