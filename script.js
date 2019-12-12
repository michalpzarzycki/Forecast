const formButton = document.querySelector('#formButton');
const inputForm = document.querySelector('#inputForm');
const localTemp = document.querySelector('.localTemp');
const localSummary = document.querySelector('.localSummary');
const APIKEY = 'zAWbqcYURiFGcj3d6FXEazB4OwbYGm0S';
console.log(formButton);

function fetchData(lat, long, apikey = "a54a5cf8aa1c0dcd3e1272b77860a1c9", lang = "pl", units = "si") {
    const cors = "https://cors-anywhere.herokuapp.com/"
    const url = "https://api.darksky.net/forecast/";

    fetch(`${cors}${url}/${apikey}/${lat},${long}?lang=${lang}&units=${units}`)
        .then(data => data.json())
        .then(data => {
            const { temperature, summary } = data.currently;
            localTemp.textContent = `Temp: ${temperature}°C `;
            localSummary.textContent = `Summary: ${summary}`
        });
}


window.addEventListener('load', (event) => {
    let latitude;
    let longitude;
    //Jeżeli zezwoliłeś na podanie swojej lokalizacji
    if (navigator.geolocation) {
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



    let cityName = inputForm.value.split(" ").join("+");
    e.preventDefault();
     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=073634a91c2b50b2af6e10147e4f385e`)
        .then(data => data.json())
        .then(
            response => {
                console.log("RESPONSE", response)
                if(response.cod == "404") {
                    document.querySelector(".inputError").style.display = "block";
                    setTimeout(()=>{ document.querySelector(".inputError").style.display = "none"}, 5000)
                }
                if(response.cod == "200") {
                    document.querySelector(".weatherDisplay").style.display = "block";
                    document.querySelector("form").style.display = "none";
                    document.querySelector(".temp").textContent=`Temp: ${Math.round(response.list[0].main.temp-273.15)}`
                    document.querySelector(".feels_like").textContent = `Temp. odczuwalna: ${response.list[0].main.feels_like}`
                    document.querySelector(".humidity").textContent = `Wilgotność: ${response.list[0].main.humidity}`
                    document.querySelector(".pressure").textContent = `Ciśnienie: ${response.list[0].main.pressure}`
                    document.querySelector(".pressure").innerHTML = '<img src="http://openweathermap.org/img/wn/'+ response.list[0].weather[0].icon +'@2x.png" />'

                   console.log(response.list[0].main.temp)
                   console.log("ODP: ", response.list[0].main)
                   console.log("icon: ", response.list[0].weather[0].icon)
                }
            }

        )
        .catch(err => {
            alert("Lol")
        })


})