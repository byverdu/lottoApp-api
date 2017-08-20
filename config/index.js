module.exports = {
  server: {
    host: 'localhost',
    port: 3800
  },
  database: {
    development: 'mongodb://localhost/lottoApp',
    production: process.env.MONGO_LOTTO_URL
  }
};
