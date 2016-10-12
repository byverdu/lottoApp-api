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
  },
  {
    method: 'GET',
    path: '/bonoloto',
    handler: controller.getBonoloto
  },
  {
    method: 'GET',
    path: '/euromillions',
    handler: controller.getEuromillions
  },
  {
    method: 'GET',
    path: '/primiWinners',
    handler: controller.getPrimiWinners
  }
];
