import axios from 'axios'
import qs from 'qs'

const getEventsFromDB = async() => {
    let response = {}

    response = await axios.get('/events')
    
    return response.data
}

const getHerosFromDB = async() => {
    let response = {}

    response = await axios.get('/pictures')

    return response.data
}

const saveNewEvent = async(newEvent) => {
    let response = {}

    response =  await axios.post("/events", newEvent)

    return response.data
}

export default{
    getEventsFromDB,
    getHerosFromDB,
    saveNewEvent
}