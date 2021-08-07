<template>
    <div class="container">
        <h1>New Event</h1>
        <form>
            <input v-model="event.title" type="text"  placeholder="Add Title" maxlength="25"> ({{event.title.length}}/25 Words)
            <div v-for="(hero) in $store.state.heros" :key="hero.id">
                <img class="hero" :src=hero.url alt={{hero.title}} :class="{selected: hero.id == selectedHero.id}" @click="event.picture = hero.url, selectedHero = hero">
            </div>
            <input type="submit" @click.prevent="$store.commit('addEvent', event)">
        </form>
    </div>
</template>

<script>


export default{
    data: function() {
        return{
            event:{
                date: "2022-02-22",
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
     max-height: 150px;
     max-width: 150px;
 }
</style>