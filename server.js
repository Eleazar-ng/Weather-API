
import express from "express";
import "dotenv/config"
import { Routers } from "./route/index.js";
import { Middleware } from "./middleware/index.js";

const app = express();
const PORT = process.env.PORT || 8083;

app.use(Routers)

app.all("*splat", (req, res, next) => {
  next(new Error("This api endpoint does not exist."));
});

//Error handling middleware
app.use(Middleware.ErrorHandler);

// Start server
app.listen(PORT, (err)=> {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`\nWeather-API server running on http://localhost:${PORT}`);
})

