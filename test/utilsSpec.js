/* global before, after, describe, it */

import chai from 'chai';
import utils from '../utils';
const expect = chai.expect;

describe( 'Utils service', () => {
  it( 'is defined', () => {
    expect( utils ).not.eq( undefined );
  });
  it( 'is an object', () => {
    expect( utils ).to.be.an( 'Object' );
  });
  describe( 'Has a findAllLottosId method', () => {
    it( 'is defined', () => {
      expect( utils.findAllLottosId ).not.eq( undefined );
    });
    it( 'returns an array with a length of 3', () => {
      utils.findAllLottosId()
        .then(( response ) => {
          expect( response ).to.be.an( 'Array' );
          expect( response ).to.have.length( 3 );
        });
    });
  });
  describe( 'Has a findPrimitiva method', () => {
    it( 'is defined', () => {
      expect( utils.findPrimitiva ).not.eq( undefined );
    });
    it( 'returns the primitiva object', () => {
      utils.findPrimitiva()
        .then(( response ) => {
          expect( response ).to.be.an( 'Object' );
          expect( response ).to.have.property( 'lottoID' ).and.eql( 'primitiva' );
          expect( response ).to.have.property( 'allResults' )
            .to.be.an( 'Array' )
            .and.length.above( 5 );
        });
    });
  });
});
