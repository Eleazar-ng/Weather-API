

export class Middleware {
  static async getWeatherRequest(req, res, next){
    try {
      const {location} = req.query;
      if(!location){
        return res.status(422).json({
          message: "Missing required parameters",
          error: "Unprocessable Entity",
        });
      }
      next()
    } catch (error) {
      next(error)
    }
  }

  static ErrorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  return res.status(500).json({
    message: err.message,
    error: "Internal Server Error",
  });
}
}
