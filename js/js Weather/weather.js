const apiKey='8cdbcd0f8c71e74e986859bd138eea7c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const cityinput = document.querySelector('.searchInput')
const button = document.querySelector('.searchBtn')




async function callweather(cities){
    const response = await fetch(apiUrl + cities +`&appid=${apiKey}`);
    var data = await response.json();

    if (response.status== 404){
        document.querySelector('.error').style.display='block';
        console.log(data);

        const img = document.querySelector('.img');
        const celci= document.querySelector('.celci');
        const city= document.querySelector('.city');
        const humidity= document.querySelector('.humidity');
        const speed = document.querySelector('.speed');
    
        celci.textContent = "- °c" ;
        city.textContent= '- - - - -';
        humidity.innerHTML= "-%";
        speed.innerHTML ="-km/h";
    
        img.style.display ="none";
    }
    else{
        document.querySelector('.error').style.display='none';
        console.log(data);

        const img = document.querySelector('.img');
        const celci= document.querySelector('.celci');
        const city= document.querySelector('.city');
        const humidity= document.querySelector('.humidity');
        const speed = document.querySelector('.speed');
        const weatherType = data.weather[0].main;
    
        celci.textContent = Math.round(data.main.temp) + "°c" ;
        city.textContent= data.name;
        humidity.innerHTML= data.main.humidity + "%";
        speed.innerHTML = Math.round(data.wind.speed) + " km/h";
    
        img.style.display ="block";
        img.src = `images/${weatherType}.png`;
    }


}

button.addEventListener('click',() =>{
    callweather(cityinput.value);
})
