'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  server.dataSources.wall.automigrate();
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
