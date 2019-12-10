const formButton = document.querySelector('#formButton');
const inputForm = document.querySelector('#inputForm');
const APIKEY = 'pX94AEzO31JtolUAiMOyrwkQH75igrAA';
console.log(formButton);

function fetchData() {

} 


formButton.addEventListener('click', (e)=>{
    console.log(inputForm.value);
    let cityName = inputForm.value;
    e.preventDefault();
    let data = fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=fcZ8fCiEInycKm7ePoM1yKWRAtpEvoCm&q=${cityName}`)
    .then(data => data.json()).then(response => console.log(response)).catch(err => console.log(err))
    

})