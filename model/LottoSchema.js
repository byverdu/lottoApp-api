// Example model
import mongoose from 'mongoose';
const LottoSchema = new mongoose.Schema({
  lottoID: String,
  date: String,
  lastResult: String,
  extras: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array,
  stars: {
    lastResult: String,
    mostRepeated: String,
    allResults: Array,
    statistics: Array
  }
});

module.exports = mongoose.model( 'Lotto', LottoSchema );
