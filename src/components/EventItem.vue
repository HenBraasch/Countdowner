<template>
    <div class="card h-100">
        <div class="img-container" @mouseenter="$emit('mouse-enter',index)" @mouseleave="$emit('mouse-leave',index)">
            <img :src="event.picture" class="card-img-top event-img" alt="The card's image on top">
            <div v-if="hover == index" class="top-right" @click="$emit('remove', event)">Delete</div>
        </div>
        <div class="card-body">
            <h4 class="card-title" v-text="event.title"></h4>
            <p v-if="selectionIndex == index" @click="$emit('show-date', index)" class="card-text" v-text="formatDate(event.date)"></p>
            <p v-else @click="$emit('show-date', index)" class="card-text" v-text="getDaysTo(event.date)"></p>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            getDaysTo(eventDate){
            let date = new Date(eventDate);
            let timeDiff = Math.abs(date.getTime() - Date.now());
            let daysTo =  Math.ceil(timeDiff / (1000 * 3600 * 24))  
            return "In " + daysTo + (daysTo > 1 ? " days" : " day");
            },
            formatDate(date){
                let _date = new Date(date);

                return _date.toLocaleDateString();
            }
        },
        props:{
            event: {
                title: String,
                date: Date,
                picture: String
            },
            selectionIndex: Number,
            index: Number,
            hover: Number
        }
    }
</script>

<style>
/* Container holding the image and the text */
.img-container{
    position: relative;
    text-align: center;
    color: white;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}
</style>