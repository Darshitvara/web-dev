const $ = document
const searchInput = $.querySelector(".search-box")
const mainContainer = $.querySelector("main")
let cityElem = $.querySelector(".city")
let dateElem = $.querySelector(".date")
let tempElem = $.querySelector(".temp")
let weatherElem = $.querySelector(".weather")
let windSpeed = $.querySelector(".wind-speed")
let pressure = $.querySelector(".pressure")
let cloudCover = $.querySelector(".cloudCover")

const ACCESS_KEY = "4d2be44eb6d23470469d1ecf4e153b82"
let  pinPoint = ""
const requestUrl = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=`
const options = {
    method : "GET"
}
    // fetchData(requestUrl)

    searchInput.addEventListener("keyup", event =>{
        let {keyCode, target:input} = event
        if(keyCode === 13){
            pinPoint = searchInput.value
            let url = requestUrl + pinPoint
            fetchData(url)
        }
        // pinPoint = searchInput.value
        //     let url = requestUrl + pinPoint
        //     fetchData(url)
    })
    
    
    async function fetchData(requestUrl){
        try{
            let response = await fetch(requestUrl,options)  
            const responseText = await response.json()      // type object  
            // console.log("here")
            // console.log(responseText)
            setData(responseText)
        }
        catch(error){
            tempElem.innerHTML = "Location does not EXISTS."
            cityElem.innerHTML = ""
            dateElem.innerHTML = ""
            weatherElem.innerHTML = ""
            windSpeed.innerHTML = ""
            pressure.innerHTML = ""
            cloudCover.innerHTML = ""
    
            console.log(error);
        }
    }
    function setData(cityData){
        cityElem.innerHTML = `${cityData.location.name}, ${cityData.location.region}, ${cityData.location.country}`
        dateElem.innerHTML = mainDate()
        tempElem.innerHTML = `${Math.floor(cityData.current.temperature)}<span>°c</span>`
        // tempElem.innerHTML = `${Math.floor(cityData.current.temperature)}<span>°c</span> <img src="${cityData.current.weather_icons}" ></img>`
        weatherElem.innerHTML = `${cityData.current.weather_descriptions}`
        windSpeed.innerHTML = `Wind Speed : ${cityData.current.wind_speed} km/h`
        pressure.innerHTML = `Pressure : ${cityData.current.pressure} Pa`
        cloudCover.innerHTML = `Cloud Cover : ${cityData.current.cloudcover}%`
    } 

    function mainDate() {
        let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let localDate = new Date()
        let day = localDate.getDate()
        let week =  weekArray[localDate.getDay()]
        let month = monthArray[localDate.getMonth()]
        let year = localDate.getFullYear()
        return `${week} ${day} ${month} ${year}`
    }