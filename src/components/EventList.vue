<template>
<!-- Events Section -->
    <div class="container">
        <h1 v-text="pageHeader"></h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div v-for="(event, index) in sortedEventList" :key="event.id" class="col">
                <EventItem 
                    :index="index" 
                    :event="event" 
                    :selectionIndex="selectionIndex"
                    :hover="hover"
                    :selectedTitleIndex="selectedTitleIndex"
                    @show-date="updateSelectionIndex(index)"
                    @mouse-enter="updateHoverStatus(index)"
                    @mouse-leave="updateHoverStatus(-1)"
                    @edit-title="updateSelectionTitleIndex(index)"
                    @event-updated="saveUpdatedEvent($store.state.events[index])"
                >
                </EventItem>
            </div>
            <div v-if="$store.state.events.length == 0">
                <p class="highlight">No events here. Start adding some!</p>
            </div>
        </div>
    </div>
</template>

<script>
import EventItem from '../components/EventItem.vue';
import countdownerAPI from '../api/countdowner.js';

export default {
    data: function(){
        return{
            name: 'EventList',
            pageHeader: "Upcoming events",
            selectionIndex: -1,
            hover: -1,
            selectedTitleIndex: -1
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
        updateSelectionTitleIndex(index){
            if(this.selectedTitleIndex == -1 || this.selectedTitleIndex != index){
                this.selectedTitleIndex = index
            } else{
                this.selectedTitleIndex = -1
            }
        },
        updateHoverStatus(index){
            if(this.hover == index){
                this.hover = -1
            } else{
                this.hover = index
            }
        },
        async saveUpdatedEvent( event ){
            await countdownerAPI.saveUpdatedEvent(event)
        }
    },
    computed:{
        sortedEventList(){
            return this.$store.state.events.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
        }
    }

};

</script>

<style>
.highlight{
    font-size: 1.5rem;
}
</style>