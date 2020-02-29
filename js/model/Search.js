/*
fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/1528488/')
.then(res =>{
    return res.json()
})
.then(data =>{
    const Data = data.consolidated_weather[0]

    console.log(
        `the weather in ${data.title} is ${Data.weather_state_name} `
    )
})
.catch(error => console.log(error))
*/