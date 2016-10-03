var UserController = require('./controllers/user'),
    StaticController = require('./controllers/static'),
    SessionController = require('./controllers/session');
exports.endpoints = [
    { method: 'GET', path: '/', config: StaticController.welcome },
    { method: 'GET', path: '/aboutus', config: StaticController.aboutus },
    { method: 'GET', path: '/users/sign_up', config: UserController.sign_up},
    { method: 'POST', path: '/users', config: UserController.create},
    { method: 'GET', path: '/users', config: UserController.getAll}, 
    { method: 'GET', path: '/user/{userId}', config: UserController.getOne}, 
    { method: 'PUT', path: '/user/{userId}', config: UserController.update}, 
    { method: 'DELETE', path: '/user/{userId}', config: UserController.remove},
    { method: 'GET', path: '/users/login', config: SessionController.new},
    { method: 'post', path: '/session/create', config: SessionController.create}
  ];

// module.exports = function(config) {
//     var user = new UserController(config);
//     var routes = [
//     {
//         method: 'GET',
//         path: '/',
//         handler: function(request, reply){
//             user.index(request, reply);
//         }
//     },
//     {
//         method: 'POST',
//         path: '/user',
//         handler: function(request, reply){
//             user.create(request, reply);
//         }
//     },
//     {
//         method: 'GET',
//         path: '/user',
//         handler: function(request, reply){
//             user.getAll(request, reply);
//         }
//     },
//     {
//         method: 'GET',
//         path: '/user/{userId}',
//         handler: function(request, reply){
//             user.getOne(request, reply);
//         }
//     },
//     {
//         method: 'DELETE',
//         path: '/user/{userId}',
//         handler: function(request, reply){
//             user.remove(request, reply);
//         }
//     },
//     {
//         method: 'GET',
//         path: '/user',
//         handler: function(request, reply){
//             user.getAll(request, reply);
//         }
//     },

//     ];
//     return routes;
// }