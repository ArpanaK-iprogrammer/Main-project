const request = require('postman-request');


const api_key = "3ba0e5eedae49070b51c85ad8c30def0";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather = async(req,res) => {
    try {
        const city = req.body.city;
        console.log(city);
        const response = await getWeatherData(city);
        //console.log(response.body);
        const data = JSON.parse(response.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

function getWeatherData(city) {
    return new Promise((resolve, reject) => {
      const weatherUrl = `${url}${city}&appid=${api_key}`;
      request(weatherUrl, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
            resolve({ response, body });
        }
      });
    });
}

module.exports = weather;