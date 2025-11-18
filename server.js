
import express from "express";
import "dotenv/config"
import { Routers } from "./route/index.js";

const app = express();
const PORT = process.env.PORT || 8083;

app.use(Routers)

// Start server
app.listen(PORT, (err)=> {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`\nWeather-API server running on http://localhost:${PORT}`);
})

