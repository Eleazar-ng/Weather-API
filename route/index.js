
import express from "express";
import { WeatherController } from "../controller/index.js";
import { Middleware } from "../middleware/index.js";

const route = express.Router();

route.get(
  "/",
  (req,res) => {
    res.json({
      success: true,
      data:"Welcome to Weather API"
    });
  }
)

route.get(
  "/api/weather", 
  Middleware.getWeatherRequest, 
  WeatherController.getWeather
)

export { route as Routers }