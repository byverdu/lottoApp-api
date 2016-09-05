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
  }
};
