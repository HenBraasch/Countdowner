<template>
    <div class="container">
        <h1>New Event</h1>
        <form>
            <div class="form-group">
                <input class="form-control" v-model="event.title" type="text"  placeholder="Add Title" maxlength="25"> ({{event.title.length}}/25 Words)
                <input class="form-control" type="date" v-model="event.date">
                <div class="row">
                    <div v-for="(hero) in $store.state.heros" :key="hero.id">
                        <div class="col">
                            <div class="card hero-card h-100">
                                <img class="card-img-top hero" :src=hero.url alt={{hero.title}} :class="{selected: hero.id == selectedHero.id}" @click="event.picture = hero.url, selectedHero = hero">
                            </div>
                        </div>
                    </div>
                </div>
                <input class="form-control btn btn-primary" type="submit" @click.prevent="$store.commit('addEvent', event), $store.dispatch('saveNewEvent', event)">
            </div>
        </form>
    </div>
</template>

<script>


export default{
    data: function() {
        return{
            event:{
                date: "",
                id: 5,
                picture: "",
                title: ""
            },
            selectedHero: {}
        }
    },
    methods:{
        selectHero(hero){
            this.$set(hero, 'selected', (hero.selected ? false : true))
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
 .hero-card{
     max-width: 150px;
 }
</style>