/* global RestMiddleware:true */

/**
 * Handle any connect errors with a standard JSON response
 *
 * Response looks like:
 *   {
 *     error: 'Error type',
  *    reason: 'Cause of error'
  *  }
 *
 * @middleware
 */
RestMiddleware.handleErrorAsJson = function (error, request, response, next) {
  var body = JSON.stringify({ error: error.error, reason: error.reason });

  response.statusCode = error.statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.write(body);
  response.end();
};
