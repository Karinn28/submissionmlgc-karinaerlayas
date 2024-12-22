const handlers = require('../server/handler.js');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: handlers.postPredict,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      },
    },
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: handlers.getPredictHistories,
  },
];

module.exports = routes;
