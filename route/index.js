
import express from "express";
import { WeatherController } from "../controller/index.js";

const route = express.Router();

route.get("/api/weather", WeatherController.getWeather)

export { route as Routers }