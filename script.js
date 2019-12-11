const formButton = document.querySelector('#formButton');
const inputForm = document.querySelector('#inputForm');
const localTemp = document.querySelector('.localTemp')
const APIKEY = 'zAWbqcYURiFGcj3d6FXEazB4OwbYGm0S';
console.log(formButton);

function fetchData(lat, long, apikey="a54a5cf8aa1c0dcd3e1272b77860a1c9") {
   const cors = "https://cors-anywhere.herokuapp.com/"
    const url = "https://api.darksky.net/forecast/";
    let weather = [];

    fetch(`${cors}${url}/${apikey}/${lat},${long}`)
    .then(data => data.json())
    .then(data => {
        console.log("data ", data);
        const { temperature, summary } = data.currently;
        document.querySelector(".localTemp").textContent=`Temp: ${temperature}`
        
    });
   return weather;
}


window.addEventListener('load', (event) => {
    let latitude;
    let longitude;
    //Jeżeli zezwoliłeś na podanie swojej lokalizacji
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        fetchData(latitude, longitude);

     
    

     
        
    })
} else {
    //Jeżeli nie zgodziłeś się podaj pogodę w jakimś losowym miejscu na świecie(wybór losowy z tablicy 10 miejsc)

}


})









formButton.addEventListener('click', (e) => {



    let cityName = inputForm.value;
    e.preventDefault();
    let data = fetch(`http://api.accuweather.com/locations/v1/search?q=Bialogard&apikey=${APIKEY}`)
        .then(data => data.json())
        .then(
            response => {
                console.log(response)

            }

        )
        .catch(err => console.log(err))


})