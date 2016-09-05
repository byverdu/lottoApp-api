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
});
