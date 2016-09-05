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
  }
};
