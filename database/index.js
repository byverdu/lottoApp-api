// database config

const config = require( '../config' );
const mongoose = require( 'mongoose' );
const uriUtil = require( 'mongodb-uri' );
let dbURL;

if ( process.env.NODE_ENV === 'development' ) {
  dbURL = config.database.development;
}

if ( process.env.NODE_ENV === 'production' ) {
  dbURL = config.database.production;
}

const mongooseUri = uriUtil.formatMongoose( dbURL ); // formatting url for better parsing
mongoose.connect( mongooseUri );
const db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'connection error' ));
db.once( 'open', () => {
    console.log( 'Connection with database succeeded.' );
});
exports.Mongoose = mongoose;
exports.db = db;
