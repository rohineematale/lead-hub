
var Hapi = require('hapi'),
    Good = require('good');
    Routes = require('./routes'),
    config = require('./config'),
    Db = require('./database'),
    Vision = require('vision'),
    Handlebars = require('handlebars');

// var server = Hapi.createServer(config.server.host, config.server.port, {
//     cors: true
// });

const server = new Hapi.Server();
server.connection({ port: 3000 });

var options = {
  reporters: {
      console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
              response: '*',
              log: '*'
          }]
      }, {
          module: 'good-console'
      }, 'stdout']
  }
}

server.register([
    {
      register: require('inert') // handle static files and directories in hapi 
    },
    {
      register: Good,
      options: options
    },
    {
      register: require('vision')
    }], (err) => {
    if (err) {throw err; }
    server.views({
      engines: {
          html: require('handlebars')
      }
    });
    server.route(Routes.endpoints);
  })


server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});


// simplet authorization

// 'use strict';

// const Bcrypt = require('bcrypt');
// const Hapi = require('hapi');
// const Basic = require('hapi-auth-basic');

// const server = new Hapi.Server();
// server.connection({ port: 3000 });

// const users = {
//     john: {
//         username: 'john',
//         password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
//         name: 'John Doe',
//         id: '2133d32a'
//     }
// };

// const validate = function (request, username, password, callback) {
//     const user = users[username];
//     if (!user) {
//         return callback(null, false);
//     }

//     Bcrypt.compare(password, user.password, (err, isValid) => {
//         callback(err, isValid, { id: user.id, name: user.name });
//     });
// };

// server.register(Basic, (err) => {

//     if (err) {
//         throw err;
//     }

//     server.auth.strategy('simple', 'basic', { validateFunc: validate });
//     server.route({
//         method: 'GET',
//         path: '/',
//         config: {
//             auth: 'simple',
//             handler: function (request, reply) {
//                 reply('hello, ' + request.auth.credentials.name);
//             }
//         }
//     });

//     server.start((err) => {

//         if (err) {
//             throw err;
//         }

//         console.log('server running at: ' + server.info.uri);
//     });
// });