const Lotto = require( '../model/LottoSchema' );
const Winners = require( '../model/WinnerSchema' );

module.exports = {
  findAllLottosId() {
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
  },
  findPrimitiva() {
    return new Promise(( resolve, reject ) => {
      Lotto.findOne({ lottoID: 'primitiva' }, ( error, lotto ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( lotto !== null ) {
          resolve( lotto );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  findBonoloto() {
    return new Promise(( resolve, reject ) => {
      Lotto.findOne({ lottoID: 'bonoloto' }, ( error, lotto ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( lotto !== null ) {
          resolve( lotto );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  findEuromillions() {
    return new Promise(( resolve, reject ) => {
      Lotto.findOne({ lottoID: 'euromillions' }, ( error, lotto ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( lotto !== null ) {
          resolve( lotto );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  findPrimiWinners() {
    return new Promise(( resolve, reject ) => {
      Winners.findOne({ lottoID: 'primitivaWinner' }, ( error, winner ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( winner !== null ) {
          resolve( winner );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  findBonoWinners() {
    return new Promise(( resolve, reject ) => {
      Winners.findOne({ lottoID: 'bonolotoWinner' }, ( error, winner ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( winner !== null ) {
          resolve( winner );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  },
  findEuroWinners() {
    return new Promise(( resolve, reject ) => {
      Winners.findOne({ lottoID: 'euromillionsWinner' }, ( error, winner ) => {
        if ( error ) {
          throw new Error( `${error}` );
        }
        if ( winner !== null ) {
          resolve( winner );
        } else {
          reject( 'Promise failed' );
        }
      });
    });
  }
};
