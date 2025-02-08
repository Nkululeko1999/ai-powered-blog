export const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.log(err.stack);
  
    let statusCode = err.statusCode || 500;
  
    let message =
      statusCode === 500
        ? "Something went wrong, try again later"
        : err.message || "Something went wrong, try again later";
  
        res.status(statusCode).json({ success: false, error: message })
  };