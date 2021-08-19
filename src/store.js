import { createStore } from 'vuex';
import axios from "axios";

// Create a new store instance
export default createStore({
    state(){
        return {
            events: [],
            heros:[]
        }
    },
    getters:{},
    mutations: {
        setInitialEvents(state, events){
            state.events = events
        },
        removeEvent(state, item){
            state.events = state.events.filter(event => event !== item)
        },
        addEvent(state, event){
            state.events.push(event)
        },
        setInitialHeros(state, heros){
            state.heros = heros
        }
    },
    actions:{
        async getEventsFromDB({ commit }){
            await axios.get('http://127.0.0.1:64450/?action=event.list').then(response => {
                commit('setInitialEvents', response.data)
            })
        },
        async getHerosFromDB({ commit }){
            await axios.get('heroData.json').then(response => {
                commit('setInitialHeros', response.data)
            })
        },
        async saveNewEvent( event ){
            console.log( event)
            await axios.post("http://127.0.0.1:64450/?action=event.add", event)
            .then(function(response){
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    modules: {}
})