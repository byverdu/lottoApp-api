// Controllers file
const utils = require( '../utils' );
module.exports = {
  getLottos: ( request, reply ) => {
    utils.findAllLottosId()
      .then(( response ) => {
        reply({
          lottos: response
        });
      });
  },
  getPrimitiva: ( request, reply ) => {
    utils.findPrimitiva()
      .then(( response ) => {
        reply({
          primitiva: response
        });
      });
  },
  getBonoloto: ( request, reply ) => {
    utils.findBonoloto()
      .then(( response ) => {
        reply({
          bonoloto: response
        });
      });
  },
  getEuromillions: ( request, reply ) => {
    utils.findEuromillions()
      .then(( response ) => {
        reply({
          euromillions: response
        });
      });
  }
};
