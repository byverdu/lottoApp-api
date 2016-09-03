const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: '192.168.0.8',
  port: 8000,
  routes: {
    cors: {
      headers: [
        'Access-Control-Allow-Origin', 'Accept', 'Content-Type', 'If-None-Match', 'Accept-language'
      ]
    }
  }
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply({'xoxo': 'patata loca'});
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
