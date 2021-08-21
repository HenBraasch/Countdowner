import axios from 'axios'

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

const saveUpdatedEvent = async(updatedEvent) => {
    let response = {}
    const event = JSON.parse(JSON.stringify(updatedEvent))
    let url = "/events/" + updatedEvent.id
    response =  await axios.patch(url, updatedEvent)

    return response.data
}

export default{
    getEventsFromDB,
    getHerosFromDB,
    saveNewEvent,
    saveUpdatedEvent
}