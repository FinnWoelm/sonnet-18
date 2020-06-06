exports.handler = function(event, context, callback) {
  const response = {
    body: JSON.stringify({ event, context }),
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    level: 'info'
  }
  console.log(response)
  callback(null, response)
}
