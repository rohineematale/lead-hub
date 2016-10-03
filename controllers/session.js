var Joi = require('joi'),
    Boom = require('boom'),
    User = require('../models/user').User;

exports.new = {
  handler: function (request, reply) {
    reply.file('./views/session/sign_in.html');
  }
};

exports.create = {
    validate: {
        payload: {
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }
    },
    handler: function(request, reply) {
      console.log(request.payload);
      User.findOne({
          'email': request.payload.email,          
          'password': request.payload.password
        }, function(err, user) {
            if (!err && user) {
                // logged in user code;
                reply({
                  message: "User logged in successfully"
                });
            } else if (!err) {
                reply(Boom.notFound());
            } else {
                reply(Boom.badRequest("Could login user"));
            }
        });
    }
};

