import { WeatherService } from "../service/index.js"

export class WeatherController {
  static async getWeather (req, res, next){
    try {
      const { location } = req.query
      const data = await WeatherService.fetchWeatherData(location);
      res.json({
      success: true,
      data
    });
    } catch (error) {
      next(error)
    }
  }

}