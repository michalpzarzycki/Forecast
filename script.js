const formButton = document.querySelector('#formButton');
const inputForm = document.querySelector('#inputForm');
const APIKEY = 'zAWbqcYURiFGcj3d6FXEazB4OwbYGm0S';
console.log(formButton);

function fetchData() {

} 


formButton.addEventListener('click', (e)=>{
    let lat;
    let long;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          console.log("lat: "+ lat + "long: " + long)
      })
    }
    console.log(inputForm.value);
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