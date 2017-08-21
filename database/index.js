// database config

const config = require( '../config' );
const mongoose = require( 'mongoose' );
const uriUtil = require( 'mongodb-uri' );
let dbURL;

mongoose.Promise = Promise;

if ( process.env.NODE_ENV === 'development' ) {
  dbURL = config.database.development;
}

if ( process.env.NODE_ENV === 'production' ) {
  dbURL = config.database.production;
}

const mongooseUri = uriUtil.formatMongoose( dbURL ); // formatting url for better parsing
const dbPromise = mongoose.connect( mongooseUri, {
  useMongoClient: true
});

exports.Mongoose = mongoose;
exports.dbPromise = dbPromise;
