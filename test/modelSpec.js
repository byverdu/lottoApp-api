/* global before, after, describe, it */

import chai from 'chai';
import mongoose from 'mongoose';
import LottoSchema from '../model/LottoSchema';

const expect = chai.expect;
let connection;
let Lotto;
let lotto;

before( done => {
  connection = mongoose.createConnection( 'mongodb://127.0.0.1/lottoApp' );
  Lotto = connection.model( 'Lotto', LottoSchema );
  lotto = new Lotto();
  connection.once( 'open', () => done());
});

after( done => {
  connection.close(() => done());
  mongoose.models = {};
  mongoose.modelSchemas = {};
});

describe( 'Model Schema', () => {
  describe( 'DB connection', () => {
    it( 'The connection or db name is lottoApp', () => {
      expect( connection.name ).eq( 'lottoApp' );
    });
    it( 'The model name is Lotto', () => {
      expect( connection.models.Lotto.modelName ).eq( 'Lotto' );
    });
    it( 'The collection name is lottos', () => {
      expect( connection.collections.lottos.collectionName ).eq( 'lottos' );
    });
  });
  describe( 'Lotto Schema', () => {
    it( 'Lottos has a lottoID property', () => {
      expect( lotto ).to.have.property( 'lottoID' );
    });
    it( 'Lottos has a date property', () => {
      expect( lotto ).to.have.property( 'date' );
    });
    it( 'Lottos has a lastResult property', () => {
      expect( lotto ).to.have.property( 'lastResult' );
    });
    it( 'Lottos has a extras property', () => {
      expect( lotto ).to.have.property( 'extras' );
    });
    it( 'Lottos has a mostRepeated property', () => {
      expect( lotto ).to.have.property( 'mostRepeated' );
    });
    it( 'Lottos has a statistics property', () => {
      expect( lotto ).to.have.property( 'statistics' );
    });
    it( 'Lottos has a allResults property', () => {
      expect( lotto ).to.have.property( 'allResults' );
    });
    it( 'Lottos has a stars property', () => {
      expect( lotto ).to.have.property( 'stars' );
    });
  });
});
