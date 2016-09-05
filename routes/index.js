const controller = require( '../controllers' );
module.exports = [
  {
    method: 'GET',
    path: '/lottos',
    handler: controller.getLottos
  },
  {
    method: 'GET',
    path: '/primitiva',
    handler: controller.getPrimitiva
  }
];
