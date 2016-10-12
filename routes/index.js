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
    path: '/primitivaWinner',
    handler: controller.getPrimiWinners
  },
  {
    method: 'GET',
    path: '/bonolotoWinner',
    handler: controller.getBonoWinners
  },
  {
    method: 'GET',
    path: '/euromillionsWinner',
    handler: controller.getEuroWinners
  }
];
