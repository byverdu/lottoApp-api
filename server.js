const Hapi = require( 'hapi' );
const corsHeaders = require( 'hapi-cors-headers' );
const config = require( './config' );
const routes = require( './routes' );
require( './database' );

const server = new Hapi.Server();
server.connection( config.server );
server.route( routes );
server.ext( 'onPreResponse', corsHeaders );

// Start the server
server.start(( err ) => {
  if ( err ) {
    throw err;
  }
  console.log( 'Server running at:', server.info.uri );
});
