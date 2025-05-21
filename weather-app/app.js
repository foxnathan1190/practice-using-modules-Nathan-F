const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const chalk = require('chalk');
//Cities
class CityWeather {
    constructor(location, temperature, conditions, humidity, windSpeed) {
        this.location = location;
        this.temperature = temperature;
        this.conditions = conditions;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
    }
}
let newYork = new CityWeather('New York', 65, 'cloudy', 60, 10);
let tokyo = new CityWeather('Tokyo', 80, 'sunny', 80, 15);
let cairo = new CityWeather('Cairo', 95, 'sunny', 20, 20);

// array of cites
let cityArray = [newYork, tokyo, cairo];

// in command line, user will input: node app.js --city="New York" (argv.city)
// take the input "New York" and link it to location: New York
function searchCity(checkCity) {
    for (let city of cityArray) {
        if (city.location === checkCity) {
            return city
        }
    }
}
//function to display city weather data
function weatherDisplay(city) {
    let inputCity = searchCity(city);
    console.log(chalk.blue.bold("\n======== Weather ========\n"));
    for (let key in inputCity) {
        console.log(`${chalk.yellow(key.charAt(0).toUpperCase() + key.slice(1))}: ${chalk.red(inputCity[key])}`);
    }
}

weatherDisplay(argv.city);