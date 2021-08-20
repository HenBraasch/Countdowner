import { createStore } from 'vuex';
// import axios from "axios";
import countdownerAPI from './api/countdowner.js'

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
            state.events = events.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
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
            const eventsData = await countdownerAPI.getEventsFromDB({})
            commit('setInitialEvents', eventsData)
        },
        async getHerosFromDB({ commit }){
            const pictures = await countdownerAPI.getHerosFromDB({})
            commit('setInitialHeros', pictures)
        }
    },
    modules: {}
})