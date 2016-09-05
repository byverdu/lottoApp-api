const controller = require( '../controllers' );
module.exports = [
  {
    method: 'GET',
    path: '/lottos',
    handler: controller.getLottos
  }
];
