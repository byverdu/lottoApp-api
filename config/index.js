module.exports = {
  server: {
    host: 'localhost',
    port: 3000
  },
  database: {
    development: 'mongodb://localhost/lottoApp',
    production: process.env.MONGO_LOTTO_URL
  }
};
