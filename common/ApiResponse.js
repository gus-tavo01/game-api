class ApiResponse {
  statusCode = 200;
  message = 'Success';
  errorMessage = null;
  fields = [];
  result = null;

  ok = (payload) => {
    this.statusCode = 200;
    this.message = 'Success';
    this.result = payload;
  };

  created = (payload) => {
    this.statusCode = 201;
    this.message = 'Created';
    this.result = payload;
  };

  badRequest = (errorMessage, fields) => {
    this.statusCode = 400;
    this.message = 'Bad_Request';
    this.errorMessage = errorMessage;
    this.fields = fields;
  };

  unauthorized = (errorMessage) => {
    this.statusCode = 401;
    this.message = 'Unauthorized';
    this.errorMessage = errorMessage;
  };

  forbidden = (errorMessage) => {
    this.statusCode = 403;
    this.message = 'Forbidden';
    this.errorMessage = errorMessage;
  };

  notFound = (errorMessage) => {
    this.statusCode = 404;
    this.message = 'Not_Found';
    this.errorMessage = errorMessage;
  };

  conflict = (errorMessage) => {
    this.statusCode = 409;
    this.message = 'Conflict';
    this.errorMessage = errorMessage;
  };

  unprocessableEntity = (errorMessage) => {
    this.statusCode = 422;
    this.message = 'Unprocessable_Entity';
    this.errorMessage = errorMessage;
  };

  internalServerError = (errorMessage) => {
    this.statusCode = 500;
    this.message = 'Internal_Server_Error';
    this.errorMessage = errorMessage;
  };
}

module.exports = ApiResponse;
