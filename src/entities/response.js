export const Response = ({ res, statusCode = 200, message, data }) => {
  res.status(statusCode).json({
    status_code: statusCode,
    message: message,
    data: data,
  });
};
