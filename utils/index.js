const Lotto = require( '../model/LottoSchema' );

module.exports = {
  findAllLottosId: () => {
    return new Promise(( resolve, reject ) => {
      Lotto.find(( error, lottos ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( lottos.length > 0 ) {
          const result = lottos.map(( lotto ) => lotto.lottoID );
          resolve( result );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  }
};
