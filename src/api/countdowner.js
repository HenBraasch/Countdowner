import axios from 'axios'

const getEventsFromDB = async() => {
    let response = {}

    response = await axios.get('https://sheltered-savannah-62191.herokuapp.com/events/')
    
    return response.data
}

const getHerosFromDB = async() => {
    let response = {}

    response = await axios.get('https://sheltered-savannah-62191.herokuapp.com/pictures/')

    return response.data
}

const saveNewEvent = async(newEvent) => {
    let response = {}

    response =  await axios.post("https://sheltered-savannah-62191.herokuapp.com/events/", newEvent)

    return response.data
}

const saveUpdatedEvent = async(updatedEvent) => {
    let response = {}
    let url = "https://sheltered-savannah-62191.herokuapp.com/events/" + updatedEvent.id
    response =  await axios.patch(url, updatedEvent)

    return response.data
}

/**
 * Deletes an event from the database
 */
const deleteEventFromDB = async(event) => {
    let response = {}
    let url = "https://sheltered-savannah-62191.herokuapp.com/events/" + event.id

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