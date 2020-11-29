let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
console.log(weather);

let city = prompt("Enter a city");
city = city.toLocaleLowerCase();

if (weather[city]) {
  let temperature = weather[city].temp;
  let temperatureCelcius = Math.round(temperature);
  let humidity = weather[city].humidity;

  alert(
    `It is currently ${temperatureCelcius}℃ in ${city} with humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the waether for this city. try going to <a href=""</a>`
  );
}
