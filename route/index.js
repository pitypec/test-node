module.exports = (router) => {
  console.log(router);
  require('./user')(router);
};
