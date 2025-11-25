import axios from "axios";
import "dotenv/config";

export class WeatherService {
  constructor(){
  }

  static async fetchWeatherData (location) {
    try {
      console.log('Fetching weather data ! ');
      const response = await axios.get(`${process.env.WEATHER_API_URL}/${location}`, {
        params:{
          key: process.env.API_KEY,
          contentType: 'json'
        },
        timeout: 10000
      })

      const data = response.data;
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}