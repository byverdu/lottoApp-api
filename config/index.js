module.exports = {
  server: {
    host: 'localhost',
    port: 3800
  },
  database: {
    testUrl: 'mongodb://localhost/lottoApp',
    liveUrl: process.env.MONGO_LOTTO_URL
  }
};
