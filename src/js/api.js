const submitData = async ()=>{
    const url = 'https://test-api.codingbootcamp.cz/api/21c8af4d/events'
    const dataObject = {
        id: 6,
    name: "PRAGUE MARATHON",
    date: "2022-05-08",
    description: "The Prague Marathon enjoys one of the most beautiful courses in the world. The race winds through the historic city centre, over bridges and along the Vltava River. The race is on Sunday, but the build up starts on Saturday with a weekend of activities, including relay and corporate team marathons.",
    image_url: "http://www.progetto.cz/wp-content/uploads/2018/03/20-prague-half-marathon-2.jpg"
      }
    const myResponse = await fetch(url,{"method":"POST","body":JSON.stringify(dataObject),"headers": {'Content-type': 'application/json'}})
    const whatIsIt = await myResponse.json()
    console.log(whatIsIt)
}
//submitData()

const getData =async()=>{
const getFetch = await fetch('https://test-api.codingbootcamp.cz/api/21c8af4d/events')
const jsonedFetch = await getFetch.json()
console.log(jsonedFetch)
const newArray = jsonedFetch.splice(0,6)

}
getData()

const clearEverything=async()=>{
    const getClear = await fetch(('https://test-api.codingbootcamp.cz/api/21c8af4d/events/reset'),{"method":"POST","headers": {'Content-type': 'application/json'}})

}
//clearEverything()

const registerData = async() =>{
    const nameAndStuff ={}
    const i = 7
    const url = `https://test-api.codingbootcamp.cz/api/21c8af4d/events/${i}/registrations`
    const myRegister = await fetch((url),{"method":"POST","headers":{'Content-type': 'application/json'},"body":json.stringify(nameAndStuff)})
    const successful = await myRegister.json()
    console.log(successful)
}
//registerData()
const eventDetails = async()=>{
    const detailFetch = await fetch('https://test-api.codingbootcamp.cz/api/21c8af4d/events')
    const detailFetchjson = await detailFetch.json()
    const i =7
    const url = `https://test-api.codingbootcamp.cz/api/21c8af4d/events/${i}`
    const eventFetch = await fetch(url)
    const eventJSON = await eventFetch.json()
    console.log(eventJSON)
}
eventDetails()