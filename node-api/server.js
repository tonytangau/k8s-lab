const logicUrl = 'http://192.168.99.100:31501/analyse/sentiment';
const axios = require('axios');
const httpErrors = require('http-errors')

const fastify = require('fastify')({
  logger: true
});

fastify.post('/analyse/sentiment', function (request, reply) {
  fastify.log.info(`Incoming post request`);

  axios.post(logicUrl, request.body)
    .then(function (response) {
      reply.send(response.data);
    })
    .catch(function (error) {
      fastify.log.error(`Error: ${error}`);

      reply.send(httpErrors.ServiceUnavailable());
    });
});

fastify.listen(8080, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Server listening on ${address}`);
});