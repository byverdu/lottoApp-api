const Hapi = require( 'hapi' );
const corsHeaders = require( 'hapi-cors-headers' );
const config = require( './config' );

// Create a server with a host and port
const server = new Hapi.Server();
server.connection( config.server );

// Add the route
server.route({
  method: 'GET',
  path: '/lottos',
  handler: ( request, reply ) => {
    reply({ xoxo: 'patata xoxo' });
  }
});

server.ext( 'onPreResponse', corsHeaders );

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});