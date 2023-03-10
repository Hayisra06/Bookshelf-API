/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },

  });

  // call server route
  server.route(routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
