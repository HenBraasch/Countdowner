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
    let url = "/events/" + updatedEvent.id
    response =  await axios.patch(url, updatedEvent)

    return response.data
}

/**
 * Deletes an event from the database
 */
const deleteEventFromDB = async(event) => {
    let response = {}
    let url = "/events/" + event.id

    response = await axios.delete(url)
    return response.data
}

export default{
    getEventsFromDB,
    getHerosFromDB,
    saveNewEvent,
    saveUpdatedEvent,
    deleteEventFromDB
}