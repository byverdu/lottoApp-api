// database config

const config = require( '../config' );
const mongoose = require( 'mongoose' );

mongoose.connect( config.database.testUrl );
const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error' ));
db.once( 'open', () => {
    console.log( 'Connection with database succeeded.' );
});
exports.Mongoose = mongoose;
exports.db = db;
