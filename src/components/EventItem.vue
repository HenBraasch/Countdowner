<template>
    <div class="card h-100 border-0 shadow rounded-card">
        <div class="card-img-top">
            <div class="embed-responsive embed-responsive-4by3">
                <div class="embed-responsive-item">
                    <div class="img-container" @mouseenter="$emit('mouse-enter',index)" @mouseleave="$emit('mouse-leave',index)">
                        <img :src="event.picture_url" class="w-100 rounded-img" alt="The card's image on top">
                        <div v-if="hover == index" class="top-right remove-item" @click="$store.commit('removeEvent', event)">Delete</div>
                    </div>
                </div>
            </div>
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
                picture_url: String
            },
            selectionIndex: Number,
            index: Number,
            hover: Number
        }
    }
</script>

<style>
/* Container holding the image and the text */
.remove-item{
    cursor: pointer;
}
.rounded-card{
    border-radius: 2%;
}
.rounded-img{
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
}

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