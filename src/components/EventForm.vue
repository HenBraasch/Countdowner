<template>
    <div class="container">
        <h1>New Event</h1>
        <form class="event-form" >
            <div class="form-group">
                <input class="form-control" v-model="event.title" type="text"  placeholder="Add Title" maxlength="25"> ({{event.title.length}}/25 Words)
                <input class="form-control" type="date" v-model="event.date">
                
                <div class="container">
                    <div class="hero-gallery">
                        <img  v-for="(hero) in $store.state.heros" :key="hero.id" :src=hero.url alt={{hero.title}} :class="{selected: hero.id == selectedHero.id}" @click="event.picture_url = hero.url, selectedHero = hero">
                    </div>
                </div>
                <input class="form-control btn btn-primary" type="submit" :disabled="!event.picture_url.length" @click.prevent="$emit('eventAdded'),$store.commit('addEvent', event), saveNewEvent()">
            </div>
        </form>
    </div>
</template>

<script>
import countdownerAPI from '../api/countdowner.js'

export default{
    data() {
        return{
            event:{
                date: "",
                id: 0,
                picture_url: "",
                title: ""
            },
            selectedHero: {}
        }
    },
    methods:{
        selectHero(hero){
            this.$set(hero, 'selected', (hero.selected ? false : true))
        },
        async saveNewEvent( ){
            await countdownerAPI.saveNewEvent(this.event)
        }
    }
}
</script>

<style>
 img.selected{
     border: solid 2px green;
 }
 img.hero{
     max-width: 150px;
 }


div.hero-gallery img {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  max-height: 250px;
  max-width: 250px;
}

div.hero-gallery {
  background-color:white;
  overflow-x: scroll;
  white-space: nowrap;
  height: 250px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

div.hero-gallery::-webkit-scrollbar{
    display: none;
}
 


</style>