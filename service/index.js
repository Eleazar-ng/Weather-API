import axios from "axios";
import "dotenv/config";

export class WeatherService {
  constructor(){
    this.apiKey = process.env.API_KEY
    this.baseUrl = process.env.WEATHER_API_URL
  }

  static async fetchWeatherData (location) {
    try {
      console.log('Fetching weather data ! ');
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london`, {
        params:{
          key: this.apiKey,
          contentType: 'json'
        },
        timeout: 10000
      })

      console.log(response)

      const data = response.data;
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}